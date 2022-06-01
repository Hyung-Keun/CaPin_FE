import React from "react";

import styled from "styled-components";

import capinLogo from "@assets/icons/logo-white.svg";
import { Image } from "@elements";
import { palette } from "@utils/const";

const Start = () => {
  return (
    <React.Fragment>
      <Container>
        <Image src={capinLogo} size="86px" />
      </Container>
    </React.Fragment>
  );
};

const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${palette.orange600};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Start;
