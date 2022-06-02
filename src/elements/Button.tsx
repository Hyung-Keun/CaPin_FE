import React from "react";

import styled from "styled-components";

interface IButton<T> {
  inlineStyles?: string;
  children?: React.ReactNode;
  background?: string;
  border?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  margin?: string;
  minWidth?: string;
  position?: string;
  onChange?: React.ChangeEventHandler<T>;
  onClick?: React.MouseEventHandler<T>;
  disabled?: boolean;
}

const Button = ({
  position,
  background,
  border,
  children,
  borderRadius,
  onChange,
  onClick,
  inlineStyles,
  width,
  height,
  margin,
  minWidth,
  disabled,
}: IButton<HTMLButtonElement & HTMLInputElement>) => {
  return (
    <React.Fragment>
      <Btn
        position={position}
        background={background}
        border={border}
        borderRadius={borderRadius}
        inlineStyles={inlineStyles}
        onChange={onChange}
        onClick={onClick}
        width={width}
        height={height}
        margin={margin}
        minWidth={minWidth}
        disabled={disabled}
      >
        {children}
      </Btn>
    </React.Fragment>
  );
};

const Btn = styled.button<
  IButton<string | HTMLButtonElement | HTMLInputElement>
>`
  ${(props) => (props.inlineStyles ? `${props.inlineStyles};` : "")};
  background-color: ${(props) =>
    props.background ? `${props.background};` : ""};
  border: ${(props) => (props.border ? `${props.border};` : "")};
  border-radius: ${(props) =>
    props.borderRadius ? `${props.borderRadius};` : ""};
  width: ${(props) => (props.width ? `${props.width};` : "")};
  min-width: ${(props) => (props.minWidth ? `${props.minWidth};` : "")};
  height: ${(props) => (props.height ? `${props.height};` : "")};
  margin: ${(props) => (props.margin ? `${props.margin};` : "")};
  position: ${(props) => (props.position ? `${props.position};` : "")};
`;

export default Button;
