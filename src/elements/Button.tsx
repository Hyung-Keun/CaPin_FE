import React from "react";

import styled from "styled-components";

interface IButton<T> {
  inlineStyles?: string;
  children?: React.ReactNode;
  onChange?: React.ChangeEventHandler<T>;
  onClick?: React.MouseEventHandler<T>;
}

const Button = ({
  children,
  onChange,
  onClick,
  inlineStyles,
}: IButton<HTMLButtonElement & HTMLInputElement>) => {
  return (
    <React.Fragment>
      <Btn inlineStyles={inlineStyles} onChange={onChange} onClick={onClick}>
        {children}
      </Btn>
    </React.Fragment>
  );
};

const Btn = styled.button<
  IButton<string | HTMLButtonElement | HTMLInputElement>
>`
  ${(props) => (props.inlineStyles ? `${props.inlineStyles};` : "")};
`;

export default Button;
