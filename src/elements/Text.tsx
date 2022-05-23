import React from "react";

import styled from "styled-components";

interface IText {
  children?: React.ReactNode;
  bold?: number;
  color?: string;
  size?: number;
  inlineStyles?: string;
  margin?: string;
  key?: string | number;
}

const Text = ({
  children,
  bold,
  color,
  size,
  inlineStyles,
  margin,
  key,
}: IText) => {
  const styles: IText = {
    bold,
    color,
    size,
    inlineStyles,
    margin,
  };
  return (
    <React.Fragment>
      <Sentence {...styles} key={key}>
        {children}
      </Sentence>
    </React.Fragment>
  );
};

const Sentence = styled.p<IText>`
  ${(props) => props.color};
  ${(props) => props.size};
  ${(props) => (props.bold ? `${props.bold};` : "")};
  ${(props) => (props.margin ? `${props.margin};` : "")};
  ${(props) => (props.inlineStyles ? `${props.inlineStyles};` : "")};
  ${(props) => (props.key ? `${props.key}` : "")}
`;
export default Text;
