"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "./ThemeSlice";
const ThemeInitializer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const defaultTheme = savedTheme || "dark";
    document.documentElement.setAttribute("data-theme", defaultTheme);
    dispatch(setTheme(defaultTheme));
  }, [dispatch]);
  return null;
};
export default ThemeInitializer;
