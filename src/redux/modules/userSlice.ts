import { UserProfile } from "@type/group";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserData {
  data: UserProfile;
}

const initialState: UserData = {
  data: {
    imageUrl: "",
    memberId: -1,
    username: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserData["data"]>) => {
      state.data = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
