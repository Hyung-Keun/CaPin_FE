import React from "react";

import styled from "styled-components";

interface IBlankBox<T> {
  children?: React.ReactNode | React.ReactNode[];
  value?: string | number;
  inlineStyles?: string;
  onClick?: React.MouseEventHandler<T>;
}
const BlankBox = ({
  children,
  value,
  inlineStyles,
  onClick,
}: IBlankBox<HTMLButtonElement & HTMLInputElement>) => {
  return (
    <React.Fragment>
      <Blank value={value} inlineStyles={inlineStyles} onClick={onClick}>
        {children}
      </Blank>
    </React.Fragment>
  );
};

const Blank = styled.div<IBlankBox<HTMLButtonElement & HTMLInputElement>>`
  ${(props) => (props.inlineStyles ? `${props.inlineStyles};` : "")}
`;
export default BlankBox;
