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
  onSubmit?: React.FormEventHandler<T>;
  onChange?: React.ChangeEventHandler<T>;
  readOnly?: boolean;
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

      onSubmit,
      onChange,
      readOnly,
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
          ref={ref as React.ForwardedRef<HTMLInputElement>}
        />
      </React.Fragment>
    );
  },
);

Input.displayName = "Input";

const commonStyle = css`
  width: 100%;
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
  ${({ inlineStyles }) => inlineStyles}
`;

const ElTextarea = styled.textarea<IInput<HTMLTextAreaElement>>`
  ${commonStyle}
  padding: ${convertPixelToEm(8)} ${convertPixelToEm(12)};
  ${({ inlineStyles }) => inlineStyles}
  resize: none;
`;

export default Input;
