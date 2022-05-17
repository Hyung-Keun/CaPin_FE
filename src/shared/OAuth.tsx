import React from "react";

import { authApi, useGetAuthQuery } from "@redux/api/authApi";
import { authSlice } from "@redux/modules/authSlice";

import { useAppDispatch } from "@hooks/auth";

interface IOAuth {
  children?: React.ReactNode;
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OAuth = ({ children, onClick }: IOAuth) => {
  const params: URLSearchParams = new URL(document.location.toString())
    .searchParams;
  const authCode = params.get("code"); //인가코드 받는부분
  const { data, isSuccess, isError, error, isLoading } =
    useGetAuthQuery(authCode);
  // const [logOut, {data}] = useLogoutQuery
  const dispatch: any = useAppDispatch();
  const accessToken = data?.accessToken;
  const refreshToken = data?.refreshToken;
  const removeTokens = data?.removeTokens;

  const logOutClick = () => {
    dispatch(authSlice.actions.removeTokens);
    console.log(authApi.useGetAuthQuery);
  };
  console.log(removeTokens);
  if (isSuccess) {
    console.log("success");
    dispatch(authSlice.actions.updateAccessToken(accessToken));
    dispatch(authSlice.actions.updateRefreshToken(refreshToken));
  } else if (isError) {
    console.log(error.toString());
    window.location.href = "/";
  } else if (isLoading) {
    <h1>LOADING</h1>;
  } else if (error) {
    <h1>ERROR</h1>;
    window.location.href = "/";
  }
  return (
    <>
      <h1>소셜로그인 테스트페이지.</h1>
      <h1>프론트-백엔드 만남의장소.</h1>
      <h1>REDIRECT URI</h1>
      <button onClick={logOutClick}>LOGOUT</button>
    </>
  );
};

export default OAuth;
