import { ICafeData, IPosition } from "@type/init";

import defaultImage from "@assets/images/default.png";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IMapData {
  center: IPosition;
  cafeList: ICafeData[];
}

const initialState: IMapData = {
  center: { lat: 37.5559, lng: 126.9723 },
  cafeList: [
    {
      id: "1",
      imgSrc: defaultImage,
      name: "노량진 카페맛집",
      addr: "서울특별시 서초구 서초동",
      hours: "10:00 ~ 20: 00",
      rate: 4.8,
      reviewCnt: 13,
      position: {
        lat: 129.0435385821103,
        lng: 35.096465155803486,
      },
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
    setCafeData(state: IMapData, action: PayloadAction<ICafeData[]>) {
      state.cafeList = action.payload;
    },
    addCafeData(state: IMapData, action: PayloadAction<ICafeData[]>) {
      state.cafeList = [...state.cafeList, ...action.payload];
    },
  },
});

export const { setMapData, setPosition, setCafeData, addCafeData } =
  mapSlice.actions;

export default mapSlice.reducer;
