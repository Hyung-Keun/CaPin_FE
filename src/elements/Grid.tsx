import React from "react";

import styled from "styled-components";

interface IGrid {
  children?: React.ReactNode;
  is_flex?: boolean;
  justifyContent?: string;
  alignItems?: string;
  direction?: string;
  inlineStyles?: string;
  width?: string;
  height?: string;
  background?: string;
  position?: string;
}

const Grid = ({
  children,
  is_flex,
  justifyContent,
  alignItems,
  direction,
  inlineStyles,
  width,
  height,
  background,
  position,
}: IGrid) => {
  const styles: IGrid = {
    is_flex,
    justifyContent,
    alignItems,
    direction,
    inlineStyles,
    width,
    height,
    background,
    position,
  };
  return (
    <React.Fragment>
      <Wrapper {...styles}>{children}</Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div<IGrid>`
  ${(props) => (props.is_flex ? "display: flex" : "")};
  ${(props) =>
    props.justifyContent ? `justify-content: ${props.justifyContent}` : ""};
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems}` : "")};
  ${(props) => (props.direction ? `flex-direction: ${props.direction}` : "")};
  ${(props) => (props.inlineStyles ? `${props.inlineStyles};` : "")};
  position: relative;
  max-width: 428px;
  width: 100%;
  min-height: 100vh;
  margin: auto;
  box-sizing: border-box;
  background: #cccccc;
  border: 5px solid #000080;
  border-radius: 20px;
`;

export default Grid;
