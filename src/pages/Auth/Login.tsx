import React from "react";

import styled from "styled-components";

import capin from "@assets/logo/capin-orange-letter.png";
import kakaoLogo from "@assets/logo/kakao_login_medium_wide.png";
import { Button, Text } from "@elements";
import { KAKAO_AUTH_URL } from "@utils/const";

const Login = () => {
  const kauthClick = () => {
    window.location.href = KAKAO_AUTH_URL ?? "/";
  };

  return (
    <React.Fragment>
      <StyleImage src={capin} />
      <Text
        height="96px"
        margin="0px 0px 0px 20px"
        lineHeight="150%"
        fontSize="32px"
        fontWeight={400}
        letterSpacing="-0.04em"
        color="#111111"
        fontFamily="Noto Sans KR"
        fontStyle="normal"
      >
        합리적인 위치에서
        <Text>
          <span style={{ fontWeight: "bold" }}>같이 스터디</span> 해요.
        </Text>
      </Text>
      <Button
        onClick={kauthClick}
        background="transparent"
        width="100%"
        border="transparent"
      >
        <KakaoLoginImg src={kakaoLogo} />
      </Button>
    </React.Fragment>
  );
};

const StyleImage = styled.img`
  width: 110px;
  margin: 140px 0px 0px 23px;
`;

const KakaoLoginImg = styled.img`
  width: 300px;
  margin: 0 auto;
  margin-top: 282px;
`;

export default Login;
