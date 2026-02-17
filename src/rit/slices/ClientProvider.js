"use client";
import { Provider } from "react-redux";
import store from "@/rit/store";
import ThemeInitializer from "./ThemeInitializer";
const ClientProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeInitializer />
      {children}
    </Provider>
  );
};

export default ClientProvider;

