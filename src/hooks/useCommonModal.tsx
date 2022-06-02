import React, { useCallback, useState } from "react";

import styled, { keyframes } from "styled-components";

import { IButtonData } from "@hooks/useUpDownModal";

export interface ModalData {
  text: string;
  buttons?: [IButtonData] | [IButtonData, IButtonData];
}

const useCommonModal = () => {
  const [isShow, setIsShow] = useState(false);

  const open = useCallback(() => setIsShow(true), []);
  const close = useCallback(() => setIsShow(false), []);

  const CommonModal = ({ text, buttons }: ModalData) => {
    if (!isShow) return <></>;
    const firstBtnText =
      (buttons && buttons[0].text) ||
      (buttons && buttons.length > 1 ? "취소" : "확인");

    const hasTwoButtons = buttons && buttons.length > 1;

    return (
      <ModalContainer>
        <DialogBox>
          <p
            dangerouslySetInnerHTML={{ __html: text.replace("\n", `<br />`) }}
          ></p>
          <GrayBorderedBox>
            <RoomOne
              onClick={(e) => {
                if (buttons && buttons[0].onClick) buttons[0].onClick(e);
                close();
              }}
            >
              {firstBtnText}
            </RoomOne>
            {hasTwoButtons && (
              <RoomTwo
                onClick={(e) => {
                  if (buttons[1] && buttons[1].onClick) buttons[1].onClick(e);
                  close();
                }}
              >
                {buttons[1]?.text || "확인"}
              </RoomTwo>
            )}
          </GrayBorderedBox>
        </DialogBox>
        <Backdrop onClick={close} />
      </ModalContainer>
    );
  };

  return {
    isShow,
    open,
    close,
    CommonModal,
  };
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

export const DialogBox = styled.div`
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
    text-align: center;
    line-height: 1.5;
  }
`;

const GrayBorderedBox = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  background-color: #e1e1e1;
  padding-top: 1px;
  justify-content: space-between;
`;

const RoomOne = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
`;
const RoomTwo = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.6);
`;

export default useCommonModal;
