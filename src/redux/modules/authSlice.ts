import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  accessToken?: string;
  refreshToken?: string;
}

const initialState: AuthState = {};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAccessToken(state: any, action: PayloadAction<string | undefined>) {
      state.accessToken = action.payload;
    },
    updateRefreshToken(state: any, action: PayloadAction<string | undefined>) {
      state.refreshToken = action.payload;
    },
    removeTokens(state: any, action: PayloadAction<string | undefined>) {
      state.refreshToken = null;
    },
  },
});

export default authSlice.reducer;
