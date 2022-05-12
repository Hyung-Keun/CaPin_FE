import React from "react";

import styled from "styled-components";

interface IText {
  children?: React.ReactNode;
  bold?: number;
  color?: string;
  size?: number;
  inlineStyles?: string;
  margin?: string;
}

const Text = ({ children, bold, color, size, inlineStyles, margin }: IText) => {
  const styles: IText = { bold, color, size, inlineStyles, margin };
  return (
    <React.Fragment>
      <Sentence {...styles}>{children}</Sentence>
    </React.Fragment>
  );
};

const Sentence = styled.p<IText>`
  ${(props) => props.color};
  ${(props) => props.size};
  ${(props) => (props.bold ? `${props.bold};` : "")};
  ${(props) => (props.margin ? `${props.margin};` : "")};
  ${(props) => (props.inlineStyles ? `${props.inlineStyles};` : "")};
`;
export default Text;
