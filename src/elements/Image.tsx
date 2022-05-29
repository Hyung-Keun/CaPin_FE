//import pakages
import React from "react";

import styled from "styled-components";

interface IImage {
  shape?: string;
  size?: string;
  inlineStyles?: string;
  src?: string;
  children?: React.ReactNode;
  margin?: string;
}
const Image = ({ src, shape, size, inlineStyles, margin }: IImage) => {
  const styles: IImage = { src, size, margin, inlineStyles };

  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }

  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }

  return (
    <React.Fragment>
      <ImageDefault {...styles}></ImageDefault>
    </React.Fragment>
  );
};

const ImageDefault = styled.img<IImage>`
  --size: ${(props) => props.size};
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: ${(props) => (props.margin ? `${props.margin};` : "")};
  ${(props) => (props.inlineStyles ? `${props.inlineStyles};` : "")};
`;

const AspectOutter = styled.div<IImage>`
  width: 100%;
  min-width: 250px;
`;

const AspectInner = styled.div<IImage>`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  ${(props) => (props.inlineStyles ? `${props.inlineStyles};` : "")};
`;

const ImageCircle = styled.div<IImage>`
  --size: ${(props) => props.size};
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 4px;
  ${(props) => (props.inlineStyles ? `${props.inlineStyles};` : "")};
`;

export default Image;
