import React from "react";
import { Link } from "react-router-dom";

import styled, { css } from "styled-components";

import { palette, typography } from "@utils/const";
import { convertPixelToRem } from "@utils/func";

interface IList {
  title: string;
  items: React.ReactElement[];
  gap: string;
  allItemsLink: string;
  direction?: "row" | "column";
}

const List = ({
  title,
  items,
  gap,
  allItemsLink,
  direction = "row",
}: IList) => {
  return (
    <section>
      <HeaderWrap>
        <h2>{title}</h2>
        {allItemsLink && <Link to={allItemsLink}>전체보기</Link>}
      </HeaderWrap>
      <ItemWrap gap={gap} direction={direction}>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ItemWrap>
    </section>
  );
};

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 ${convertPixelToRem(20)};

  & > h2 {
    ${typography.st17b}
  }
  & > a {
    color: ${palette.orange300};
  }
`;

const ItemWrap = styled.ul<{
  gap: IList["gap"];
  direction: IList["direction"];
}>`
  width: 100%;
  padding: 1em 0;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  overflow-x: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  ${({ direction, gap }) => getItemMargin(direction, gap)}
`;

const getItemMargin = (direction: IList["direction"], gap: IList["gap"]) => {
  switch (direction) {
    case "row":
      return css`
        & > li {
          margin-left: ${gap};
        }

        & > li:last-child {
          margin-right: ${gap};
        }
      `;
    case "column":
      return css`
        & > li {
          margin: 0 ${gap};
        }
        & > li:not(:last-child) {
          margin-bottom: ${gap};
        }
      `;
  }
};

export default List;
