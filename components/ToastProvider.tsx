"use client";

import { useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastProvider = () => {
  const { theme } = useTheme();

  return (
    <ToastContainer
      theme={theme === "dark" ? "dark" : "light"}
      position="bottom-right"
      autoClose={2000}
    />
  );
};

export default ToastProvider;
