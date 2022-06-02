import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navList: [
    {
      name: "HOME",
      path: "/groupList",
      iconType: {
        active: "ActiveHome",
        inactive: "Home",
      },
    },
    {
      name: "SEARCH",
      path: "/explore",
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
  geoData: {
    lat: -1,
    lng: -1,
  },
  cafeListData: [],
};

export const initSlice = createSlice({
  name: "init",
  initialState,
  reducers: {
    setGeoData(state, action) {
      state.geoData = action.payload;
    },
    setCafeListData(state, action) {
      state.cafeListData = action.payload;
    },
  },
});

export const { setGeoData, setCafeListData } = initSlice.actions;

export default initSlice.reducer;
