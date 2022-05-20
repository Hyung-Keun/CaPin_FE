import React from "react";

import styled from "styled-components";

interface ISelect {
  children?: React.ReactNode;
  inlineStyles?: string;
  name?: string;
  key?: string;
  value?: string;
}
export const Select = ({
  children,
  inlineStyles,
  name,
  key,
  value,
}: ISelect) => {
  return (
    <React.Fragment>
      <SelectBox inlineStyles={inlineStyles} name={name}>
        <Option name={name} key={key} value={value}>
          {children}
        </Option>
      </SelectBox>
    </React.Fragment>
  );
};
const SelectBox = styled.select<ISelect>`
  ${(props) => (props.name ? `${props.name};` : "")};
  ${(props) => (props.inlineStyles ? `${props.inlineStyles};` : "")};
`;
const Option = styled.option<ISelect>`
  ${(props) => (props.inlineStyles ? `${props.inlineStyles};` : "")};
`;

export default Select;
