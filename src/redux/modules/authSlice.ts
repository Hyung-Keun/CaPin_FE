import { IAuthState } from "@type/auth";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IAuthState = {
  accessToken: "",
  refreshToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAccessToken(state: IAuthState, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    updateRefreshToken(state: IAuthState, action: PayloadAction<string>) {
      state.refreshToken = action.payload;
    },
    removeTokens(state: IAuthState) {
      state.accessToken = "";
      state.refreshToken = "";
    },
  },
});

export const { updateAccessToken, updateRefreshToken, removeTokens } =
  authSlice.actions;

export default authSlice.reducer;
