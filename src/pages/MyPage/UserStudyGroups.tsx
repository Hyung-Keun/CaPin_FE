import styled from "styled-components";

import StudyGroupCard from "@components/StudyGroupCard";
import { DefaultStudyGroupListLayout } from "@components/StudyGroupList";

import getMockupCurrentGroups from "./mock";
import { ICommonProps } from "./types";

import { typography } from "@utils/const";

const Header = styled.header`
  width: 100%;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 9px;

  & > h1 {
    ${typography.st17b};
  }
`;

const UserStudyGroups = ({ onBackButtonClick }: ICommonProps) => {
  const mockups = getMockupCurrentGroups(20);

  return (
    <>
      {/* TODO: ADD Assets */}
      <Header onClick={onBackButtonClick}>
        <h1>내 스터디 그룹</h1>
      </Header>
      <DefaultStudyGroupListLayout>
        {mockups.map((mockup) => (
          <StudyGroupCard key={mockup.groupId} group={mockup} />
        ))}
      </DefaultStudyGroupListLayout>
    </>
  );
};

export default UserStudyGroups;
