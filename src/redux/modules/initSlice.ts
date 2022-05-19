import { IInitState } from "@type/init";

import { createSlice } from "@reduxjs/toolkit";

const initialState: IInitState = {
  navList: [
    {
      name: "홈",
      path: "/",
      iconType: "ArrowLeft",
    },
    {
      name: "탐색",
      path: "/",
      iconType: "ArrowLeft",
    },
    {
      name: "채팅",
      path: "/",
      iconType: "ArrowLeft",
    },
    {
      name: "마이페이지",
      path: "/",
      iconType: "ArrowLeft",
    },
  ],
};

export const initSlice = createSlice({
  name: "init",
  initialState,
  reducers: {},
});

export const {} = initSlice.actions;

export default initSlice.reducer;
