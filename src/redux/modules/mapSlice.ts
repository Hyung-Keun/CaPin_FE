import { CafeInfo } from "@type/cafe";
import { IPosition } from "@type/init";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IMapData {
  center: IPosition;
  cafeList: CafeInfo[];
}

const initialState: IMapData = {
  center: { lat: 37.5559, lng: 126.9723 },
  cafeList: [
    {
      id: "",
      category_group_code: "",
      category_group_name: "",
      category_name: "",
      distance: "",
      phone: "",
      place_name: "",
      place_url: "",
      road_address_name: "",
      x: "",
      y: "",
      mainphotourl: "",
      comntcnt: "",
      scoresum: "",
      scorecnt: "",
    },
  ],
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setMapData(state: IMapData, action: PayloadAction<IMapData>) {
      state = { ...state, ...action.payload };
    },
    setPosition(state: IMapData, action: PayloadAction<IPosition>) {
      state.center = { ...state.center, ...action.payload };
    },
    setCafeData(state: IMapData, action: PayloadAction<CafeInfo[]>) {
      state.cafeList = action.payload;
    },
    addCafeData(state: IMapData, action: PayloadAction<CafeInfo[]>) {
      state.cafeList = [...state.cafeList, ...action.payload];
    },
  },
});

export const { setMapData, setPosition, setCafeData, addCafeData } =
  mapSlice.actions;

export default mapSlice.reducer;
