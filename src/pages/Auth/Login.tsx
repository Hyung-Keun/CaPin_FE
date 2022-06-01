import React from "react";

import capin from "@assets/logo/capin-orange-letter.svg";
import kakaoLogo from "@assets/logo/kakao_login_medium_wide.png";
import { Button, Text, Image } from "@elements";
import { KAKAO_AUTH_URL } from "@utils/const";

const Login = () => {
  const kauthClick = () => {
    window.location.href = KAKAO_AUTH_URL ?? "/";
  };

  return (
    <React.Fragment>
      <Image src={capin} size="110px" margin="140px 0px 0px 23px" />
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
        width="0.1px"
        height="0.1px"
        border="transparent"
      >
        <Image margin="282px 0px 0px 20px" src={kakaoLogo} />
      </Button>
    </React.Fragment>
  );
};

export default Login;
