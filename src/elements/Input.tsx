import React from "react";

import styled, { css } from "styled-components";

import { Text } from "./index";

import { palette, typography } from "@utils/const";
import { convertPixelToEm } from "@utils/func";

type HTMLInputBlockType = HTMLTextAreaElement | HTMLInputElement;

interface IInput<T> {
  inlineStyles?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  label?: string;
  multiLine?: boolean;
  rows?: number;
  width?: string;
  minWidth?: string;
  onSubmit?: React.FormEventHandler<T>;
  onChange?: React.ChangeEventHandler<T>;
  readOnly?: boolean;
  margin?: string;
}

const Input = React.forwardRef<HTMLInputBlockType, IInput<HTMLInputBlockType>>(
  (
    {
      inlineStyles,
      type,
      placeholder,
      value,
      label,
      multiLine,
      width,
      minWidth,
      onSubmit,
      onChange,
      readOnly,
      margin,
    },
    ref,
  ) => {
    if (multiLine) {
      return (
        <React.Fragment>
          {label && <Text margin="0px">{label}</Text>}
          <ElTextarea
            inlineStyles={inlineStyles}
            rows={10}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            margin={margin}
            width={width}
            minWidth={minWidth}
            ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
          />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <ElInput
          inlineStyles={inlineStyles}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onSubmit={onSubmit}
          readOnly={readOnly}
          width={width}
          minWidth={minWidth}
          margin={margin}
          ref={ref as React.ForwardedRef<HTMLInputElement>}
        />
      </React.Fragment>
    );
  },
);

Input.displayName = "Input";

const commonStyle = css`
  background-color: ${palette.grey050};
  border-radius: 0.25em;
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    ${typography.b15r}
    color: ${palette.grey400};
  }
`;

const ElInput = styled.input<IInput<HTMLInputElement>>`
  ${commonStyle}
  padding: ${convertPixelToEm(12)} ${convertPixelToEm(14)};
  width: ${(props) => (props.width ? `${props.width}` : "")};
  min-width: ${(props) => (props.minWidth ? `${props.minWidth}` : "")};
  ${({ inlineStyles }) => inlineStyles};
  margin: ${(props) => (props.margin ? `${props.margin}` : "")};
`;

const ElTextarea = styled.textarea<IInput<HTMLTextAreaElement>>`
  ${commonStyle}
  padding: ${convertPixelToEm(8)} ${convertPixelToEm(12)};
  width: ${(props) => (props.width ? `${props.width}` : "")};
  min-width: ${(props) => (props.minWidth ? `${props.minWidth}` : "")};
  ${({ inlineStyles }) => inlineStyles};
  resize: none;
  margin: ${(props) => (props.margin ? `${props.margin}` : "")};
`;

export default Input;
