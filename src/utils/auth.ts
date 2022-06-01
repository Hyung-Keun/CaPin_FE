import { ACCESS_TOKEN_LS, REFRESH_TOKEN_LS } from "./const";

export const getAccessTokenLS = (): string | null =>
  localStorage.getItem(ACCESS_TOKEN_LS);
export const setAccessTokenLS = (token: string) =>
  localStorage.setItem(ACCESS_TOKEN_LS, token);
export const getRefreshTokenLS = () => localStorage.getItem(REFRESH_TOKEN_LS);
export const setRefreshTokenLS = (token: string) =>
  localStorage.setItem(REFRESH_TOKEN_LS, token);

export const getTokenPayload = (token: string | null) =>
  token && decodeURIComponent(atob(token?.split(".")[1] as string));

export const prepareHeaders = (headers: Headers) => {
  const accessToken = getAccessTokenLS();

  if (accessToken) {
    headers.set("Authorization", accessToken);
  }

  return headers;
};
