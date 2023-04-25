import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface IRotation {
  x: number;
  y: number;
  z: number;
}
const initialState: IRotation = {
  x: 1.8,
  y: 0,
  z: 1.2,
};

export const rotationSlice = createSlice({
  name: "rotation",
  initialState,
  reducers: {
    setRotation: (state, action: PayloadAction<IRotation>) => {
      state = { ...action.payload };
    },
  },
});
export const { setRotation } = rotationSlice.actions;
export default rotationSlice.reducer;
