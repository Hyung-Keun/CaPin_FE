import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IStudyOpenData {
  data: {
    groupTitle: string;
    description: string;
    maxMemberCount: number;
    image: string; // base64 string
    firstDay: string;
    lastDay: string;
  };
}

const initialState: IStudyOpenData = {
  data: {
    groupTitle: "",
    description: "",
    maxMemberCount: 2,
    image: "",
    firstDay: "",
    lastDay: "",
  },
};

export const studySlice = createSlice({
  name: "study",
  initialState,
  reducers: {
    setStudyOpenData: (state, action: PayloadAction<IStudyOpenData>) => {
      state.data = action.payload.data;
    },
  },
});

export const { setStudyOpenData } = studySlice.actions;

export default studySlice.reducer;
