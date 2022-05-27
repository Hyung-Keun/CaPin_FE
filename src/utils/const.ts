import { css } from "styled-components";

export const {
  REACT_APP_KAKAO_AUTH_URL: KAKAO_AUTH_URL,
  REACT_APP_BASE_API_URL: BASE_API_URL,
} = process.env;

export const ACCESS_TOKEN_LS = "access_token";
export const REFRESH_TOKEN_LS = "refresh_token";

export const MOBILE_WIDTH = "428px";

export const palette = {
  orange030: "#faf1ef",
  orange050: "#F9E9E7",
  orange100: "#fbccbd",
  orange200: "#f9ab94",
  orange300: "#f88b69",
  orange400: "#f77249",
  orange500: "#f65b2b",
  orange600: "#EB5527",
  orange700: "#dd4e22",
  orange800: "#cf471f",
  orange900: "#b53c18",

  grey050: "#f5f5f5",
  grey100: "#eeeeee",
  grey200: "#e1e1e1",
  grey300: "#cfcfcf",
  grey400: "#aaaaaa",
  grey500: "#898989",
  grey600: "#626262",
  grey700: "#4f4f4f",
  grey800: "#313131",
  grey900: "#111111",
  black: "#000000",
};

export const typography = {
  t24m: css`
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: -4px;
  `,
  t20b: css`
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -4px;
  `,
  st18sb: css`
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: -3px;
  `,
  st17b: css`
    font-size: 17px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: -3px;
  `,
  st16b: css`
    font-size: 16px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: -3px;
  `,
  b16sb: css`
    font-size: 16px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: -3px;
  `,
  b16r: css`
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -3px;
  `,
  b15r: css`
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -3px;
  `,
  b14b: css`
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -3px;
  `,
  b14m: css`
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -3px;
  `,
  b14r: css`
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -3px;
  `,
  b13sb: css`
    font-size: 13px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: -2px;
  `,
  b13r: css`
    font-size: 13px;
    line-height: 19px;
    letter-spacing: -2px;
  `,
  b12m: css`
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -2px;
  `,
};

export const lineClamp = [
  css`
    -webkit-line-clamp: unset;
  `,
  css`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  `,
  css`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  `,
  css`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  `,
];
