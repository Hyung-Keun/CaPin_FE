import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { IStudyCard } from "@type/init";

import Icon from "@components/Icon";

import { palette } from "@utils/const";

const APPEAR_MEMBER_CNT = 2;

const StudyCard = ({ id, name, meetArea, members, midPoint }: IStudyCard) => {
  const memberCnt = members.length;
  const appearMembers = members.slice(0, APPEAR_MEMBER_CNT);

  return (
    <Container to={`/${id}`}>
      <Name>{name}</Name>
      <MeetArea>다음 장소: {meetArea}</MeetArea>
      <MemberList>
        {appearMembers.map((member, i) => {
          return <Member key={i}>{member}</Member>;
        })}
        {memberCnt > APPEAR_MEMBER_CNT && (
          <Member key={-1} darken>
            +{memberCnt - APPEAR_MEMBER_CNT}
          </Member>
        )}
      </MemberList>
      <MidPointArea>
        <MidPoint>
          중간지점: <Em>{midPoint}</Em>
        </MidPoint>
        <Icon type="ArrowRight" />
      </MidPointArea>
    </Container>
  );
};

const Container = styled(Link)`
  --padding: 1em;
  padding: var(--padding) 0;
  display: block;
  background-color: ${palette.grey050};
  border-radius: 1em;
  width: 19.375em;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  & > * {
    padding: 0 var(--padding);
  }
  & > *:last-child {
    padding-top: var(--padding);
  }
`;

const Name = styled.h3`
  font-weight: 700;
  margin-bottom: 0.2em;
`;

const MeetArea = styled.h4`
  font-size: 0.875rem;
  margin-bottom: 1.5em;
`;

const MemberList = styled.ul`
  display: flex;
  margin-bottom: 1.5em;
  & > li:not(:first-child) {
    margin-left: -0.5em;
  }
`;

const Member = styled.li<{ darken?: boolean }>`
  width: 2.5em;
  height: 2.5em;
  background-color: ${({ darken }) =>
    darken ? palette.grey800 : palette.grey300};
  color: ${({ darken }) => (darken ? palette.grey050 : palette.black)};
  font-size: 0.8em;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MidPointArea = styled.div`
  color: ${palette.blue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9em;
  border-top: 1px solid ${palette.grey200};

  & > svg {
    width: 0.45em;
  }
`;

const MidPoint = styled.span``;

const Em = styled.em`
  font-weight: 500;
`;

export default StudyCard;
