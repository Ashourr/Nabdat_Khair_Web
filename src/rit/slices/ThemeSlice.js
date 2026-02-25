// ThemeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light", // 👈 تم التغيير من dark إلى light ليكون الافتراضي نهاري
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;