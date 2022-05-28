import React from "react";

import styled from "styled-components";

import getMockupCurrentGroups from "./mock";
import { ICommonProps } from "./types";

import { typography, palette, lineClamp } from "@utils/const";

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

const GroupsLayout = styled.section`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  row-gap: 16px;
  width: 100%;
  min-height: 100vh;
  padding-left: 32px;
  padding-right: 33px;
  padding-top: 20px;
  background: ${palette.grey050};
`;

const CurrentGroup = styled.section`
  width: 100%;
  padding: 16px;
  background: #ffffff;
  border-radius: 6px;

  & > h2 {
    ${typography.st16b};
    color: ${palette.grey900};
    margin-bottom: 2px;
  }

  & > h3,
  & h4,
  & h5 {
    ${typography.b14r};
    color: ${palette.grey800};
  }

  & > h3 {
    margin-bottom: 16px;
    ${lineClamp[1]};
  }

  & h4 {
    margin-bottom: 12px;
  }
`;

const CurrentStudyGroups = ({ onBackButtonClick }: ICommonProps) => {
  const mockups = getMockupCurrentGroups(20);

  return (
    <>
      {/* TODO: ADD Assets */}
      <Header onClick={onBackButtonClick}>
        <h1>내 스터디 그룹</h1>
      </Header>
      <GroupsLayout>
        {mockups.map((mockup) => (
          <CurrentGroup key={mockup.groupId}>
            <h2>{mockup.groupTitle}</h2>
            <h3>{mockup.description}</h3>
            {/* TODO: ADD Assets  */}
            <div>
              <h4>{mockup.roughAddress}</h4>
            </div>
            <div>
              <h4>{`${mockup.firstDay}~${mockup.lastDay}`}</h4>
            </div>
            <div>
              <h5>{`${mockup.memberCount} / ${mockup.maxMemberCount}명`}</h5>
            </div>
          </CurrentGroup>
        ))}
      </GroupsLayout>
    </>
  );
};

export default CurrentStudyGroups;
