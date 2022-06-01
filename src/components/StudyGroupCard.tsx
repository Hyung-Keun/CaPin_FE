import React, { MouseEventHandler } from "react";

import styled from "styled-components";

import { GroupInfo } from "@type/group";

import { IconWithText } from "@elements";
import { typography, palette, lineClamp } from "@utils/const";
import { convertPixelToRem } from "@utils/func";

const DefaultStudyGroupCardLayout = styled.div`
  width: ${convertPixelToRem(310)};
  width: 100%;
  padding: 16px;
  background: #ffffff;
  border-radius: 6px;
  list-style: none;
  cursor: pointer;

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

  & div:not(:last-child) {
    margin-bottom: 12px;
  }

  & h4 {
    /* margin-bottom: 12px; */
    vertical-align: baseline;
  }
`;

const StudyGroupCard = ({
  group,
  onClick,
}: {
  group: GroupInfo;
  onClick: () => void;
}) => {
  const handleClick: MouseEventHandler = (e) => {
    e.stopPropagation();
    onClick();
  };
  return (
    <DefaultStudyGroupCardLayout onClick={handleClick}>
      <h2>{group.groupTitle}</h2>
      <h3>{group.description}</h3>

      <div>
        <IconWithText
          type="component"
          text={<h4>{group.roughAddress}</h4>}
          iconType="Marker"
        />
      </div>
      <div>
        <IconWithText
          type="component"
          text={<h4>{`${group.firstDay}~${group.lastDay}`}</h4>}
          iconType="Calendar"
        />
      </div>
      <div>
        <IconWithText
          type="component"
          text={<h5>{`${group.memberCount} / ${group.maxMemberCount}명`}</h5>}
          iconType="People"
        />
      </div>
    </DefaultStudyGroupCardLayout>
  );
};

export default StudyGroupCard;
export { DefaultStudyGroupCardLayout };
