import React from "react";

import styled from "styled-components";

interface IButton<T> {
  inlineStyles?: string;
  children?: React.ReactNode;
  background?: string;
  border?: string;
  onChange?: React.ChangeEventHandler<T>;
  onClick?: React.MouseEventHandler<T>;
}

const Button = ({
  background,
  border,
  children,
  onChange,
  onClick,
  inlineStyles,
}: IButton<HTMLButtonElement & HTMLInputElement>) => {
  return (
    <React.Fragment>
      <Btn
        background={background}
        border={border}
        inlineStyles={inlineStyles}
        onChange={onChange}
        onClick={onClick}
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
  background: ${(props) => (props.background ? `${props.background};` : "")};
  border: ${(props) => (props.border ? `${props.border};` : "")};
`;

export default Button;
