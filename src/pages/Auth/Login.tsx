import React from "react";

import googleLogo from "@assets/logo/btn_google_signin_light_normal_web@2x.png";
import kakaoLogo from "@assets/logo/kakao_login_medium_wide.png";
import { Button, Text, Grid, Image } from "@elements";
import { KAKAO_AUTH_URL } from "@utils/const";

const Login = () => {
  const kauthClick = () => {
    window.location.href = KAKAO_AUTH_URL ?? "/";
  };

  return (
    <React.Fragment>
      <Grid
        inlineStyles="
        width: 375px;
        height: 812px;
        border: solid 10px blue;
      "
      >
        <Text
          inlineStyles="position: absolute;
width: 252px;
height: 80px;
font-weight: 400;
left: 20px;
margin: 129px 103px 603px 20px;
font-size: 32px;
line-height: 40px;"
        >
          합리적인 위치에서 <b>모임</b>을 잡아보세요.
        </Text>
        <Image
          shape="rectangle"
          src="data:image/jpeg;base64,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"
          inlineStyles="background-position: center;
          padding-top: 200%;
          background-size: contain;
          background-repeat: no-repeat;"
        />
        <Button
          inlineStyles="
        position: absolute; 
        top: 582px;
        margin-left: 20px; "
          onClick={kauthClick}
        >
          <Image size="100%" src={kakaoLogo} />
        </Button>
        <Button
          inlineStyles="
          position: absolute; 
          top: 652px; 
          width: 317px;
          margin-left: 20px;
          "
        >
          <Image size="100%" src={googleLogo} />
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
