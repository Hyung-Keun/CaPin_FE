import React from "react";

import styled from "styled-components";

import { IIconType } from "@type/asset";

import Icon from "@components/Icon";

const InlineFlex = styled.div<{ gap: string }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ gap }) => gap};
`;

type Props =
  | { type: "text"; iconType: IIconType; text: string; gap?: string }
  | {
      type: "component";
      iconType: IIconType;
      text: React.ReactNode;
      gap?: string;
    };

const IconWithText = ({ type, iconType, gap = "0 10px", text }: Props) => {
  const Component = type === "text" ? null : text;
  return (
    <InlineFlex gap={gap}>
      <Icon type={iconType} />
      {type === "text" ? <span>{text}</span> : Component}
    </InlineFlex>
  );
};

export default IconWithText;
