import styled from "styled-components";

import Icon from "./Icon";

import { palette } from "@utils/const";

const Loading = () => {
  return (
    <Container>
      <CircleArea>
        <Icon type="LogoOrange" />
      </CircleArea>
    </Container>
  );
};

const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${palette.grey050};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const CircleArea = styled.div`
  background-color: ${palette.white};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;

  & > svg {
    width: 3em;
    height: 3em;
    animation: slow-blink 1s infinite linear;

    @keyframes slow-blink {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

export default Loading;
