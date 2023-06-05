import { createSlice } from "@reduxjs/toolkit";
interface IPreloading {
  isLoading: boolean;
}
const initialState: IPreloading = {
  isLoading: true,
};

export const preloadingSlice = createSlice({
  name: "preloading-slice",
  initialState,
  reducers: {
    setPreloading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});
export const { setPreloading } = preloadingSlice.actions;
export default preloadingSlice.reducer;
