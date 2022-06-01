import React from "react";

import styled, { css } from "styled-components";

import { Text } from "./index";

import { palette, typography } from "@utils/const";
import { convertPixelToRem } from "@utils/func";

type HTMLInputBlockType = HTMLTextAreaElement | HTMLInputElement;

interface IInput<T> {
  fontWeight?: number;
  inlineStyles?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  label?: string;
  multiLine?: boolean;
  height?: string;
  rows?: number;
  width?: string;
  minWidth?: string;
  backgroundColor?: string;
  onSubmit?: React.FormEventHandler<T>;
  onChange?: React.ChangeEventHandler<T>;
  readOnly?: boolean;
  padding?: string;
  margin?: string;
  fontSize?: string;
}

const Input = React.forwardRef<HTMLInputBlockType, IInput<HTMLInputBlockType>>(
  (
    {
      inlineStyles,
      backgroundColor,
      type,
      placeholder,
      value,
      label,
      padding,
      multiLine,
      width,
      minWidth,
      onSubmit,
      onChange,
      readOnly,
      margin,
      height,
      fontSize,
      fontWeight,
    },
    ref,
  ) => {
    if (multiLine) {
      return (
        <React.Fragment>
          {label && <Text margin="0px">{label}</Text>}
          <ElTextarea
            inlineStyles={inlineStyles}
            fontWeight={fontWeight}
            rows={10}
            value={value}
            padding={padding}
            backgroundColor={backgroundColor}
            placeholder={placeholder}
            onChange={onChange}
            margin={margin}
            width={width}
            fontSize={fontSize}
            height={height}
            minWidth={minWidth}
            ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
          />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <ElInput
          fontWeight={fontWeight}
          inlineStyles={inlineStyles}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onSubmit={onSubmit}
          readOnly={readOnly}
          width={width}
          padding={padding}
          height={height}
          minWidth={minWidth}
          fontSize={fontSize}
          margin={margin}
          backgroundColor={backgroundColor}
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
  padding: ${convertPixelToRem(8)} ${convertPixelToRem(12)};
  padding: ${(props) => (props.padding ? `${props.padding}` : "")};
  width: ${(props) => (props.width ? `${props.width}` : "")};
  height: ${(props) => (props.height ? `${props.height}` : "")};
  min-width: ${(props) => (props.minWidth ? `${props.minWidth}` : "")};
  ${({ inlineStyles }) => inlineStyles};
  background-color: ${(props) =>
    props.backgroundColor ? `${props.backgroundColor}` : ""};
  margin: ${(props) => (props.margin ? `${props.margin}` : "")};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : "")};
  font-weight: ${(props) => (props.fontWeight ? `${props.fontWeight}` : "")};
`;

const ElTextarea = styled.textarea<IInput<HTMLTextAreaElement>>`
  ${commonStyle}
  padding: ${convertPixelToRem(8)} ${convertPixelToRem(12)};
  width: ${(props) => (props.width ? `${props.width}` : "")};
  min-width: ${(props) => (props.minWidth ? `${props.minWidth}` : "")};
  ${({ inlineStyles }) => inlineStyles};
  resize: none;
  background-color: ${(props) =>
    props.backgroundColor ? `${props.backgroundColor}` : ""};
  height: ${(props) => (props.height ? `${props.height}` : "")};
  margin: ${(props) => (props.margin ? `${props.margin}` : "")};
  background-color: ${(props) =>
    props.backgroundColor ? `${props.backgroundColor}` : ""};
  padding: ${(props) => (props.padding ? `${props.padding}` : "")};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : "")};
  font-weight: ${(props) => (props.fontWeight ? `${props.fontWeight}` : "")};
`;

export default Input;
