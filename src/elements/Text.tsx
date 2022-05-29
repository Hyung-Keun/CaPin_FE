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
  width?: string;
  height?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: number;
  fontFamily?: string;
  fontStyle?: string;
  letterSpacing?: string;
}

const Text = ({
  children,
  bold,
  color,
  size,
  inlineStyles,
  margin,
  key,
  width,
  height,
  fontSize,
  lineHeight,
  fontWeight,
  fontFamily,
  fontStyle,
  letterSpacing,
}: IText) => {
  const styles: IText = {
    bold,
    color,
    size,
    inlineStyles,
    margin,
    width,
    height,
    fontSize,
    lineHeight,
    fontWeight,
    fontFamily,
    fontStyle,
    letterSpacing,
  };
  return (
    <React.Fragment>
      <Sentence {...styles} key={key}>
        {children}
      </Sentence>
    </React.Fragment>
  );
};

const Sentence = styled.div<IText>`
  color: ${(props) => props.color};
  size: ${(props) => props.size};
  bold: ${(props) => (props.bold ? `${props.bold};` : "")};
  ${(props) => (props.inlineStyles ? `${props.inlineStyles};` : "")};
  ${(props) => (props.key ? `${props.key}` : "")};
  margin: ${(props) => (props.margin ? `${props.margin}` : "")};
  width: ${(props) => (props.width ? `${props.width}` : "")};
  height: ${(props) => (props.height ? `${props.height}` : "")};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : "")};
  font-weight: ${(props) => props.fontWeight};
  font-family: ${(props) => (props.fontFamily ? `${props.fontFamily}` : "")};
  font-style: ${(props) => (props.fontStyle ? `${props.fontStyle}` : "")};
  letter-spacing: ${(props) =>
    props.letterSpacing ? `${props.letterSpacing}` : ""};
  line-height: ${(props) => (props.lineHeight ? `${props.lineHeight}` : "")};
`;
export default Text;
