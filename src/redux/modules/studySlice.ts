import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommonState {
  value: string;
}

const initialState: CommonState = {
  value: "",
};

export const studySlice = createSlice({
  name: "study",
  initialState,
  reducers: {
    setStudy: (state: { value: string }, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setStudy } = studySlice.actions;

export default studySlice.reducer;
