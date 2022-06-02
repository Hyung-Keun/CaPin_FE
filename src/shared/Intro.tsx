import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import Icon from "@components/Icon";

import { palette } from "@utils/const";

const Intro = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }, []);

  return (
    <Container>
      <Icon type="LogoWhite" />
    </Container>
  );
};

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${palette.orange500};
`;

export default Intro;
