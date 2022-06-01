import styled from "styled-components";

import { lineClamp, palette, typography } from "@utils/const";
import { convertPixelToRem } from "@utils/func";

const EmptyCard = () => {
  return (
    <CardWrap>
      <Card>
        <h2>참여중인 스터디 그룹이 없어요.</h2>
        <h3>스터디 그룹을 만들어볼까요?</h3>
        🗒
      </Card>
    </CardWrap>
  );
};

const CardWrap = styled.div`
  padding: ${convertPixelToRem(32)};
`;

const Card = styled.div`
  min-width: ${convertPixelToRem(310)};
  width: 100%;
  padding: ${convertPixelToRem(40)};
  text-align: center;
  background: #ffffff;
  border-radius: 6px;
  list-style: none;

  & > h2 {
    ${typography.b16sb};
    color: ${palette.grey900};
    margin-bottom: 2px;
  }

  & > h3 {
    ${typography.b14r};
    color: ${palette.grey800};
  }

  & > h3 {
    margin-bottom: ${convertPixelToRem(24)};
    ${lineClamp[1]};
  }
`;

export default EmptyCard;
