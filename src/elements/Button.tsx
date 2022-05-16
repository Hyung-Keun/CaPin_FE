import React from "react";

import styled from "styled-components";

interface IButton {
  inlineStyles?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, onClick, inlineStyles }: IButton) => {
  const styles: IButton = { inlineStyles };
  return (
    <React.Fragment>
      <Btn {...styles} onClick={onClick}>
        {children}
      </Btn>
    </React.Fragment>
  );
};

const Btn = styled.button<IButton>`
  ${(props) => (props.inlineStyles ? `${props.inlineStyles};` : "")};
`;

export default Button;
