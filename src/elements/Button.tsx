import React from "react";

import styled from "styled-components";

interface IBtn {
  inlineStyles?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, onClick, inlineStyles }: IBtn) => {
  const styles: IBtn = { inlineStyles };
  return (
    <React.Fragment>
      <Btn {...styles} onClick={onClick}>
        {children}
      </Btn>
    </React.Fragment>
  );
};

const Btn = styled.button<IBtn>`
  ${(props) => (props.inlineStyles ? `${props.inlineStyles};` : "")};
`;

export default Button;
