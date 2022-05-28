import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import StudyGroupCard from "@components/StudyGroupCard";
import { DefaultStudyGroupListLayout } from "@components/StudyGroupList";
import TitleWithBackButton from "@components/TitleWithBackButton";

import getMockupCurrentGroups from "./mock";
import { ICommonProps } from "./types";

import { typography } from "@utils/const";

const UserStudyGroups = ({ goBack }: ICommonProps) => {
  const navigate = useNavigate();
  const navigateToDetailPage = () => {
    // navigate()
  };

  const mockups = getMockupCurrentGroups(20);

  return (
    <>
      {/* TODO: ADD Assets */}
      <TitleWithBackButton title="내 스터디 그룹" onBackButtonClick={goBack} />
      {/* <h1>내 스터디 그룹</h1> */}

      <DefaultStudyGroupListLayout>
        {mockups.map((mockup) => (
          <StudyGroupCard
            key={mockup.groupId}
            group={mockup}
            onClick={navigateToDetailPage}
          />
        ))}
      </DefaultStudyGroupListLayout>
    </>
  );
};

export default UserStudyGroups;
