import { ACCESS_TOKEN_LS, REFRESH_TOKEN_LS } from "./const";

export const getAccessTokenLS = () => localStorage.getItem(ACCESS_TOKEN_LS);
export const setAccessTokenLS = (token: string) =>
  localStorage.setItem(ACCESS_TOKEN_LS, token);
export const getRefreshTokenLS = () => localStorage.getItem(REFRESH_TOKEN_LS);
export const setRefreshTokenLS = (token: string) =>
  localStorage.setItem(REFRESH_TOKEN_LS, token);
