import { createSlice } from "@reduxjs/toolkit";
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
