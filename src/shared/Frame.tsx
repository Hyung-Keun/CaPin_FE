import React from "react";

import styled from "styled-components";

import { MOBILE_WIDTH, palette } from "@utils/const";

interface IFrame {}

const Frame = ({ children }: React.PropsWithChildren<IFrame>) => {
  return (
    <Outline>
      <ContentArea>{children}</ContentArea>
    </Outline>
  );
};

const Outline = styled.div`
  max-width: ${MOBILE_WIDTH};
  width: 100%;
  height: 100vh;
  background-color: ${palette.grey050};
  border-radius: 3em;
  padding: 1em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const ContentArea = styled.div`
  border-radius: 2em;
  background-color: ${palette.white};
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  margin: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  transform: translate(0, 0);
`;

export default Frame;
