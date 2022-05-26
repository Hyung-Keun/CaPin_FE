import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommonState {
  value: string;
}

const initialState: CommonState = {
  value: "",
};

export const areaSlice = createSlice({
  name: "region",
  initialState,
  reducers: {
    setArea: (state: { value: string }, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setArea } = areaSlice.actions;

export default areaSlice.reducer;
