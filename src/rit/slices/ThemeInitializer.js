"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "./ThemeSlice";

const ThemeInitializer = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  // أول تحميل
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const defaultTheme = savedTheme || "dark";
    dispatch(setTheme(defaultTheme));
  }, [dispatch]);

  // أي تغيير بعد كده
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return null;
};

export default ThemeInitializer;
