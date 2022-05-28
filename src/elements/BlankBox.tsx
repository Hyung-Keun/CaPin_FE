import React from "react";

import styled from "styled-components";

interface IBlankBox {
  children?: React.ReactNode | React.ReactNode[];
  value?: string | number;
  inlineStyles?: string;
}
const BlankBox = ({ children, value, inlineStyles }: IBlankBox) => {
  return (
    <React.Fragment>
      <Blank value={value} inlineStyles={inlineStyles}>
        {children}
      </Blank>
    </React.Fragment>
  );
};

const Blank = styled.div<IBlankBox>`
  ${(props) => (props.inlineStyles ? `${props.inlineStyles};` : "")}
`;
export default BlankBox;
