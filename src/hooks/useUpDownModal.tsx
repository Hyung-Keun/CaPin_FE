import { MouseEventHandler, useCallback, useState } from "react";

import styled, { keyframes } from "styled-components";

import { palette, typography } from "@utils/const";
import { convertPixelToRem } from "@utils/func";

interface IButtonData {
  text: string;
  onClick: MouseEventHandler;
}

const useUpDownModal = () => {
  const [isShow, setIsShow] = useState(false);

  const open = useCallback(() => setIsShow(true), []);
  const close = useCallback(() => setIsShow(false), []);

  const UpDownModal = ({ buttonData }: { buttonData: IButtonData[] }) => {
    if (!isShow) return <></>;

    return (
      <Container>
        <Backdrop onClick={close} />
        <section>
          {buttonData.map((bd, i) => (
            <button
              key={`${bd.text}_${i}`}
              onClick={(e) => {
                bd.onClick(e);
                close();
              }}
            >
              {bd.text}
            </button>
          ))}
          <button onClick={close}>취소</button>
        </section>
      </Container>
    );
  };
  return {
    UpDownModal,
    isShow,
    open,
    close,
  };
};

const slideUp = keyframes`
  0% {
    bottom: -20%;
  }
  100% {
    bottom: 0;
  }
`;

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  & > section {
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: ${palette.white};
    border-top-left-radius: ${convertPixelToRem(10)};
    border-top-right-radius: ${convertPixelToRem(10)};
    padding-top: ${convertPixelToRem(24)};

    animation: ${slideUp} 0.3s ease-out;

    & > button {
      ${typography.b16r};
      border: none;
      display: block;
      text-align: center;
      width: 100%;
      padding: ${convertPixelToRem(16)} 0;
      background-color: ${palette.white};
      color: ${palette.grey900};

      &:last-child {
        ${typography.b16sb};
        background-color: ${palette.orange600};
        color: ${palette.white};
        padding: 24px 0 45px;
        margin-top: ${convertPixelToRem(12)};
      }
    }
  }
`;

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default useUpDownModal;
