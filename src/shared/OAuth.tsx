import React, { useEffect } from "react";

const OAuth = () => {
  useEffect(() => {
    const params: URLSearchParams = new URL(document.location.toString())
      .searchParams;
    const authCode = params.get("code"); //인가코드 받는부분
    console.log(authCode);
  });
  return (
    <React.Fragment>
      <h1>소셜로그인 테스트페이지.</h1>
      <h1>프론트-백엔드 만남의장소.</h1>
      <h1>This page has no meaning...</h1>
    </React.Fragment>
  );
};

export default OAuth;
