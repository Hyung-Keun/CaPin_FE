import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommonState {
  value: string;
}

const initialState: CommonState = {
  value: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: { value: string }, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setProfileImage: (
      state: { value: string },
      action: PayloadAction<string>,
    ) => {
      state.value = action.payload;
    },
  },
});

export const { setUser, setProfileImage } = userSlice.actions;

export default userSlice.reducer;
