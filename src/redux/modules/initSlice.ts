import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePageName: "HOME",
  navList: [
    {
      name: "HOME",
      path: "/",
      iconType: {
        active: "ActiveHome",
        inactive: "Home",
      },
    },
    {
      name: "SEARCH",
      path: "/search",
      iconType: {
        active: "ActiveSearch",
        inactive: "Search",
      },
    },
    {
      name: "ME",
      path: "/mypage",
      iconType: {
        active: "ActiveMe",
        inactive: "Me",
      },
    },
  ],
};

export const initSlice = createSlice({
  name: "init",
  initialState,
  reducers: {
    setActiveBtnName(state, action) {
      state.activePageName = action.payload;
    },
  },
});

export const { setActiveBtnName } = initSlice.actions;

export default initSlice.reducer;
