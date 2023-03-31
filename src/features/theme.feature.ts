import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IThemeHandler {
  currentTheme: "dark" | "light";
}
const initialState: IThemeHandler = {
  currentTheme: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      console.log("changing theme");
      if (state.currentTheme === "dark") {
        document.body.classList.remove("dark");
        state.currentTheme = "light";
      } else {
        document.body.classList.add("dark");
        state.currentTheme = "dark";
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
