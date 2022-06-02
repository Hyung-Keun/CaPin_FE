import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { MemberAuthority, SpecificGroupResponse } from "@type/group";

import {
  useApproveMemberMutation,
  useDenyMemberMutation,
  useExitStudyMutation,
  useLazyGetSpecificStudyQuery,
} from "@redux/api/studyApi";
import { useGetUserQuery } from "@redux/api/userApi";

import Icon from "./Icon";
import Loading from "./Loading";

import { Text, Image } from "@elements";
import useCommonModal, { ModalData } from "@hooks/useCommonModal";
import useUpDownModal from "@hooks/useUpDownModal";
import { palette, typography } from "@utils/const";
import { convertPixelToRem } from "@utils/func";

const People = ({
  groupId,
  memberList,
}: {
  groupId: SpecificGroupResponse["groupId"];
  memberList: SpecificGroupResponse["memberList"];
}) => {
  const navigate = useNavigate();
  const memberIdRef = useRef(-1);
  const [getSpecificStudy] = useLazyGetSpecificStudyQuery();
  const { data: userData } = useGetUserQuery(null);
  const [
    approve,
    {
      isLoading: isLoadingApprove,
      isSuccess: isSuccessApprove,
      isError: isErrorApprove,
    },
  ] = useApproveMemberMutation();
  const [
    deny,
    {
      isLoading: isLoadingDeny,
      isSuccess: isSuccessDeny,
      isError: isErrorDeny,
    },
  ] = useDenyMemberMutation();
  const [
    exit,
    {
      isLoading: isLoadingExit,
      isSuccess: isSuccessExit,
      isError: isErrorExit,
    },
  ] = useExitStudyMutation();
  const { UpDownModal, open: openUpDownModal } = useUpDownModal();
  const { CommonModal, open: openCommonModal } = useCommonModal();
  const [commonModalData, setCommonModalData] = useState<ModalData>({
    text: "",
  });

  const userAuthority = memberList?.find(
    (member) => member.memberId === userData?.memberId,
  )?.authority;

  const isMember =
    memberList?.findIndex(
      (member) => member.memberId === userData?.memberId,
    ) !== -1;

  const modalButtonData = [
    {
      text: "승인",
      onClick: () => approve({ groupId, memberId: memberIdRef.current }),
    },
    {
      text: "거절",
      onClick: () => deny({ groupId, memberId: memberIdRef.current }),
    },
  ];

  const exitStudy = () => {
    setCommonModalData({
      text: "정말로 탈퇴하시겠습니까?",
      buttons: [
        {
          text: "취소",
        },
        {
          text: "확인",
          onClick: () => {
            if (groupId) {
              exit(groupId);
            }
          },
        },
      ],
    });
    openCommonModal();
  };

  useEffect(() => {
    if (
      isSuccessApprove ||
      isSuccessDeny ||
      isSuccessExit ||
      isErrorApprove ||
      isErrorDeny ||
      isErrorExit
    ) {
      if (isSuccessApprove) {
        setCommonModalData({ text: "승인되었습니다." });
      } else if (isSuccessDeny) {
        setCommonModalData({ text: "거절되었습니다." });
      } else if (isSuccessExit) {
        setCommonModalData({
          text: "탈퇴되었습니다.",
          buttons: [{ text: "확인", onClick: () => navigate("/grouplist") }],
        });
      } else {
        setCommonModalData({
          text: "요청에 실패했습니다.\n잠시 후 다시 시도해주세요.",
        });
      }
      openCommonModal();
      getSpecificStudy(String(groupId));
    }
  }, [
    isSuccessApprove,
    isSuccessDeny,
    isSuccessExit,
    isErrorApprove,
    isErrorDeny,
    isErrorExit,
  ]);

  return (
    <>
      {(isLoadingApprove || isLoadingDeny || isLoadingExit) && <Loading />}
      <Title>스터디원목록</Title>
      <StyleUl>
        {memberList?.map((member) =>
          !(userAuthority === MemberAuthority.OWNER) &&
          member.authority === MemberAuthority.WAIT ? (
            <></>
          ) : (
            <li key={member.memberId}>
              <InfoWrap>
                <Image
                  shape="circle"
                  size="30px"
                  inlineStyles={`margin-right: ${convertPixelToRem(10)}`}
                  src={member.imageUrl!}
                />
                <Text>{member.username}</Text>
              </InfoWrap>
              {userAuthority === MemberAuthority.OWNER &&
                member.authority === MemberAuthority.WAIT && (
                  <OptionButton
                    onClick={() => {
                      memberIdRef.current = member.memberId;
                      openUpDownModal();
                    }}
                  >
                    승인
                    <Icon type="ArrowDownWhite" />
                  </OptionButton>
                )}
            </li>
          ),
        )}
      </StyleUl>
      {isMember && <ExitButton onClick={exitStudy}>스터디 나가기</ExitButton>}
      <UpDownModal buttonData={modalButtonData} />
      <CommonModal {...commonModalData} />
    </>
  );
};

const Title = styled.h2`
  ${typography.b14r}
  margin-bottom: ${convertPixelToRem(20)};
`;

const StyleUl = styled.ul`
  & > li {
    ${typography.b14r}
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: ${convertPixelToRem(8)};
    }
  }
`;

const InfoWrap = styled.div`
  display: flex;
  align-items: center;
`;

const OptionButton = styled.button`
  ${typography.b13sb}
  background-color: ${palette.orange600};
  color: ${palette.white};
  border: none;
  border-radius: ${convertPixelToRem(4)};
  padding: ${convertPixelToRem(6)} ${convertPixelToRem(12)};
  text-align: center;
  & > svg {
    margin-left: ${convertPixelToRem(8)};
  }
`;

const ExitButton = styled.button`
  font-size: 14px;
  padding: 0;
  text-decoration-line: underline;
  margin-top: ${convertPixelToRem(24)};
  color: ${palette.grey600};
  cursor: pointer;
`;

export default People;
