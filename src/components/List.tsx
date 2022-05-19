import React from "react";

import styled, { css } from "styled-components";

interface IList {
  title: string;
  items: React.ReactElement[];
  gap: string;
  direction?: "row" | "column";
}

const List = ({ title, items, gap, direction = "row" }: IList) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ItemWrap gap={gap} direction={direction}>
        {items.map((item, i) => (
          <Item key={i}>{item}</Item>
        ))}
      </ItemWrap>
    </Container>
  );
};

const Container = styled.section``;

const Title = styled.h2`
  font-weight: 500;
  margin: 0 1.25em;
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

const Item = styled.li``;

export default List;
