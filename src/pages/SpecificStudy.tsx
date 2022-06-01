import React, { useEffect, useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styled from "styled-components";

import { MemberAuthority } from "@type/group";

import Icon from "@components/Icon";
import Loading from "@components/Loading";
import People from "@components/People";

import {
  useApplyStudyMutation,
  useLazyGetSpecificStudyQuery,
} from "@redux/api/studyApi";
import { useGetUserQuery } from "@redux/api/userApi";

import groupDefault from "@assets/images/group_default.jpg";
import useUpDownModal from "@hooks/useUpDownModal";
import { palette, typography } from "@utils/const";
import { convertPixelToRem } from "@utils/func";

/**
 * 앞으로 구현해야할 기능들
 * 1. 관리자 > 모집글 수정/종료, 스터디삭제 기능
 * 2. 공유하기 기능
 *
 */
const SpecificStudy = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id: groupId } = params;
  const [getSpecificStudyData, { data }] = useLazyGetSpecificStudyQuery();
  const { data: userData } = useGetUserQuery(null);
  const [apply, { isSuccess: isSuccessApply, isLoading: isLoadingApply }] =
    useApplyStudyMutation();
  const { UpDownModal, open: openUpDownModal } = useUpDownModal();

  useLayoutEffect(() => {
    if (groupId) getSpecificStudyData(groupId);
  }, [groupId]);

  const isMember =
    data?.memberList.findIndex(
      (member) => member.memberId === userData?.memberId,
    ) !== -1;

  const isOwner =
    data?.memberList.findIndex(
      (member) =>
        member.memberId === userData?.memberId &&
        member.authority === MemberAuthority.OWNER,
    ) !== -1;

  const goPlaceSearch = () => {
    if (groupId) navigate(`/placesearch/${groupId}`);
  };

  const applyGroup = () => {
    if (groupId) apply(groupId);
  };

  useEffect(() => {
    if (isSuccessApply && groupId) getSpecificStudyData(groupId);
  }, [isSuccessApply]);

  /**
   * 모집글 수정/종료, 스터디삭제 기능 구현 필요.
   */
  const buttonData = [
    {
      text: "모집글 수정",
      onClick: () => {},
    },
    {
      text: "모집 종료",
      onClick: () => {},
    },
    {
      text: "스터디 삭제",
      onClick: () => {},
    },
  ];

  return (
    <>
      {isLoadingApply && <Loading />}
      <Container headerImage={data?.imageUrl || groupDefault}>
        <header>
          <button onClick={() => navigate(-1)}>
            <Icon type="CircleArrowLeft" />
          </button>
          <ButtonWrap>
            {isOwner && (
              <button onClick={openUpDownModal}>
                <Icon type="CircleDotsVertical" />
              </button>
            )}
            <button>
              <Icon type="CircleShare" />
            </button>
          </ButtonWrap>
        </header>
        <ContentArea>
          <h1>{data?.groupTitle}</h1>
          <p>{data?.description}</p>
          <GroupInfoArea>
            <ul>
              <li>
                <h2>지역</h2>
                <div>{data?.roughAddress}</div>
              </li>
              <li>
                <h2>기간</h2>
                <div>
                  {data?.firstDay} ~ {data?.lastDay}
                </div>
              </li>
              <li>
                <h2>인원</h2>
                <div>
                  {data?.memberCount} / {data?.maxMemberCount} 명
                </div>
              </li>
            </ul>
          </GroupInfoArea>
          <button onClick={isMember ? goPlaceSearch : applyGroup}>
            {isMember ? "중간장소 추천받기" : "참여하기"}
          </button>
        </ContentArea>
        <Divider />
        <PeopleArea>
          <People groupId={data?.groupId!} memberList={data?.memberList!} />
        </PeopleArea>
      </Container>
      <UpDownModal buttonData={buttonData} />
    </>
  );
};

const Container = styled.section<{ headerImage: string }>`
  width: 100%;
  & > header {
    width: 100%;
    height: ${convertPixelToRem(210)};
    background-image: url(${({ headerImage }) => headerImage});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 ${convertPixelToRem(20)};
    padding-top: ${convertPixelToRem(56)};
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentArea = styled.main`
  position: relative;
  top: -${convertPixelToRem(10)};
  padding: 0 ${convertPixelToRem(20)};
  padding-top: ${convertPixelToRem(40)};
  padding-bottom: ${convertPixelToRem(48)};
  border-top-left-radius: ${convertPixelToRem(10)};
  border-top-right-radius: ${convertPixelToRem(10)};
  background-color: ${palette.white};

  & > h1 {
    ${typography.t20b}
    margin-bottom: ${convertPixelToRem(10)};
  }
  & > p {
    ${typography.b14r}
    margin-bottom: ${convertPixelToRem(32)};
  }
  & > button {
    ${typography.b16sb}
    width: 100%;
    padding: ${convertPixelToRem(12)} 0;
    text-align: center;
    background-color: ${palette.orange600};
    color: ${palette.white};
    border: none;
    border-radius: ${convertPixelToRem(6)};
    cursor: pointer;
  }
`;

const GroupInfoArea = styled.section`
  & > ul {
    margin-bottom: ${convertPixelToRem(32)};

    & > li {
      ${typography.b14r}
      display: flex;

      &:not(:last-child) {
        margin-bottom: ${convertPixelToRem(10)};
      }
      & > h2 {
        color: ${palette.grey500};
        margin-right: ${convertPixelToRem(12)};
      }
      & > div {
        color: ${palette.grey800};
      }
    }
  }
`;

const Divider = styled.hr`
  width: 100%;
  height: ${convertPixelToRem(15)};
  background-color: ${palette.grey100};
  border: none;
`;

const PeopleArea = styled.section`
  padding: ${convertPixelToRem(24)} ${convertPixelToRem(20)};
`;

export default SpecificStudy;
