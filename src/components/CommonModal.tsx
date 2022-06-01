import React from "react";

import styled, { keyframes, css } from "styled-components";

import { palette } from "@utils/const";

interface ICommonModal<T> {
  rooms?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<T>;
}

const CommonModal = ({
  rooms,
  onClick,
  children,
}: ICommonModal<HTMLButtonElement & HTMLInputElement>) => {
  if (rooms === "two") {
    return (
      <ModalContainer>
        <DialogBox onClick={onClick}>
          <p>{children}</p>
          <GrayBorderedBox>
            <RoomOne onClick={onClick}>{children}</RoomOne>
            <RoomTwo onClick={onClick}>{children}</RoomTwo>
          </GrayBorderedBox>
        </DialogBox>
        <Backdrop onClick={onClick} />
      </ModalContainer>
    );
  }
  return (
    <ModalContainer>
      <DialogBox onClick={onClick}>
        <p>{children}</p>
        <GrayBorderedBox onClick={onClick}>{children}</GrayBorderedBox>
      </DialogBox>
      <Backdrop onClick={onClick} />
    </ModalContainer>
  );
};

const fadeIn = keyframes`
from{
  
  opacity: 0
}
to {
  
  opacity: 1
}
`;

const fadeOut = keyframes`
from{
  opacity: 1
}
to {
  opacity: 0
}
`;

const slideUp = keyframes`
from{
  tramsform: translateY(200px)
} to{
  transform: translateY(0px)
}`;

const slideDown = keyframes`
from{
  transform: translateY(0px);
}to{
  transform: translateY(200PX);
}
`;

const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;
// ${props => props.disappear && css`animation-name: ${fadeOut}`}
export const DialogBox = styled.div<
  ICommonModal<HTMLButtonElement & HTMLInputElement>
>`
  width: 270px;
  height: 148px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 13px;
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
  overflow: hidden;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  & > p {
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
// ${props => props.disappear && css`animation-name: ${slideDown}`}
const GrayBorderedBox = styled.div<
  ICommonModal<HTMLButtonElement & HTMLInputElement>
>`
  // margin: 101px 0px 47px 0px;
  // width: 270px;
  // height: 47px;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // box-sizing: border-box;
  // background-color: white;
  // z-index: 10000;
  // border: 1px solid #e1e1e1;
  // border-top-color: #e1e1e1
  // border-right-color: transparent;
  // border-left-color: transparent;
  // border-bottom-color: transparent;
  // position: absolute;
  // border-bottom-left-radius: 13px;
  // border-bottom-right-radius: 13px;
  width: 100%;
  height: 30%;
  display: flex;
  background-color: #e1e1e1;
  padding-top: 1px;
  justify-content: space-between;
`;

const RoomOne = styled.div<ICommonModal<HTMLButtonElement & HTMLInputElement>>`
  // width: 136px;
  // height: 46px;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // box-sizing: border-box;
  // background-color: white;
  // z-index: 10000;
  // border: 2px solid #e1e1e1;
  // border-right-color: #e1e1e1;
  // border-top-color: transparent;
  // border-left-color: transparent;
  // border-bottom-color: transparent;
  // border-bottom-left-radius: 13px;
  // position: absolute;
  width: calc(50% - 0.5px);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;
const RoomTwo = styled.div<ICommonModal<HTMLButtonElement & HTMLInputElement>>`
  // width: 134px;
  // height: 46px;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // box-sizing: border-box;
  // background-color: white;
  // z-index: 10000;
  // border: 1px solid #e1e1e1;
  // border-right-color: transparent;
  // border-left-color: #e1e1e1;
  // border-top-color: transparent;
  // border-bottom-color: transparent;
  // border-bottom-right-radius: 13px;
  // position: absolute;
  // left: 130px;
  width: calc(50% - 0.5px);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const Backdrop = styled.div<ICommonModal<HTMLButtonElement & HTMLInputElement>>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.6);
`;

export default CommonModal;
