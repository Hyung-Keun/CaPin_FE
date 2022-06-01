import React, { useEffect } from "react";

import styled from "styled-components";

import Icon from "@components/Icon";
import TitleWithBackButton from "@components/TitleWithBackButton";

import { useGetUserQuery } from "@redux/api/userApi";
import { setUser } from "@redux/modules/userSlice";

import { USER_SETTINGS, USER_STUDY_GROUPS, ALARM_SETTINGS } from "../constants";

import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { palette, typography } from "@utils/const";

const UserOverviewSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 12px;
  width: calc(100% - 40px);
  padding-bottom: 24px;
  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${palette.grey200};

  & > img {
    width: 56px;
    height: 56px;
    border-radius: 9999px;
  }
`;

const SubTitleWithIcon = styled.div<{ padding?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  background: none;

  width: 100%;
  height: 48px;
  padding: ${({ padding }) => padding ?? "0"};

  & > p {
    ${typography.b16r};
    color: ${palette.grey900};
  }
`;

const Bar = styled.div`
  width: 100%;
  height: 8px;
  margin: 12px 0px;
  background: #f6f6f6;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
`;

const DeleteUserSection = styled.div`
  width: calc(100% - 40px);
  padding-top: 23.5px;
  margin: 0 auto;
  margin-top: 11.5px;
  border-top: 1px solid ${palette.grey200};

  & > button {
    background: none;
    border: none;
    ${typography.b14r};
    color: ${palette.grey500};
  }
`;

const Overview = ({
  onClick,
}: {
  onClick: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const goUserSettings = () => onClick(USER_SETTINGS);
  const goUserStudyGroups = () => onClick(USER_STUDY_GROUPS);
  const goAlarmSettings = () => onClick(ALARM_SETTINGS);
  const { data: getData } = useGetUserQuery(null);
  const userData = useAppSelector(({ user }) => user.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!userData && getData) dispatch(setUser(getData));
  }, [userData, getData]);

  return (
    <>
      <TitleWithBackButton title="마이 페이지" showButton />
      <UserOverviewSection>
        <img alt="userImage" src={userData.imageUrl || getData?.imageUrl} />
        <SubTitleWithIcon onClick={goUserSettings} role="button">
          <p>{userData.username || getData?.username}</p>
          <Icon type="ArrowRight" />
        </SubTitleWithIcon>
      </UserOverviewSection>
      <SubTitleWithIcon
        onClick={goUserStudyGroups}
        role="button"
        padding="0 20px"
      >
        <p>내 스터디 그룹</p>
        <Icon type="ArrowRight" />
      </SubTitleWithIcon>
      <SubTitleWithIcon
        onClick={goAlarmSettings}
        role="button"
        padding="0 20px"
      >
        <p>알림설정</p>
        <Icon type="ArrowRight" />
      </SubTitleWithIcon>
      <Bar aria-hidden />
      <SubTitleWithIcon role="button" padding="0 20px">
        <p>로그아웃</p>
      </SubTitleWithIcon>
      <DeleteUserSection>
        <button>회원탈퇴</button>
      </DeleteUserSection>
    </>
  );
};

export default Overview;
