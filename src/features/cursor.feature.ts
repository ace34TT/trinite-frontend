import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface ICursor {
  hoveringTitles: boolean;
  hoveringContact: boolean;
}
const initialState: ICursor = {
  hoveringTitles: false,
  hoveringContact: false,
};

export const cursorSlice = createSlice({
  name: "cursor-slice",
  initialState,
  reducers: {
    handleHoveringTitles: (
      state,
      action: PayloadAction<{ value: boolean }>
    ) => {
      state.hoveringTitles = action.payload.value;
    },
    handleHoveringContact: (
      state,
      action: PayloadAction<{ value: boolean }>
    ) => {
      state.hoveringContact = action.payload.value;
    },
  },
});
export const { handleHoveringTitles, handleHoveringContact } =
  cursorSlice.actions;
export default cursorSlice.reducer;
