import React from "react";

import styled from "styled-components";

interface IBlankBox<T> {
  children?: React.ReactNode | React.ReactNode[];
  value?: string | number;
  inlineStyles?: string;
  flexDirection?: string;
  display?: string;
  backgroundColor?: string;
  border?: string;
  width?: string;
  height?: string;
  margin?: string;
  borderRadius?: string;
  borderBottomColor?: string;
  padding?: string;
  onClick?: React.MouseEventHandler<T>;
}
const BlankBox = ({
  children,
  value,
  width,
  height,
  padding,
  inlineStyles,
  flexDirection,
  display,
  borderBottomColor,
  border,
  margin,
  borderRadius,
  onClick,
  backgroundColor,
}: IBlankBox<HTMLButtonElement & HTMLInputElement>) => {
  return (
    <React.Fragment>
      <Blank
        flexDirection={flexDirection}
        display={display}
        value={value}
        inlineStyles={inlineStyles}
        onClick={onClick}
        backgroundColor={backgroundColor}
        width={width}
        borderBottomColor={borderBottomColor}
        height={height}
        border={border}
        borderRadius={borderRadius}
        margin={margin}
        padding={padding}
      >
        {children}
      </Blank>
    </React.Fragment>
  );
};

const Blank = styled.div<IBlankBox<HTMLButtonElement & HTMLInputElement>>`
  ${(props) => (props.inlineStyles ? `${props.inlineStyles};` : "")};
  flex-direction: ${(props) =>
    props.flexDirection ? `${props.flexDirection};` : ""};
  display: ${(props) => (props.display ? `${props.display};` : "")};
  background-color: ${(props) =>
    props.backgroundColor ? `${props.backgroundColor};` : ""};
  width: ${(props) => (props.width ? `${props.width};` : "")};
  height: ${(props) => (props.height ? `${props.height};` : "")};
  border: ${(props) => (props.border ? `${props.border};` : "")};
  border-bottom-color: ${(props) =>
    props.borderBottomColor ? `${props.borderBottomColor};` : ""};
  border-radius: ${(props) =>
    props.borderRadius ? `${props.borderRadius};` : ""};
  margin: ${(props) => (props.margin ? `${props.margin};` : "")};
  padding: ${(props) => (props.padding ? `${props.padding};` : "")};
`;

export default BlankBox;
