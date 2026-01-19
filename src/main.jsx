import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "./AppProvider.jsx";
import GlobalStyle from "./AppStyles.js";
import "hamburgers/dist/hamburgers.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppProvider />
  </React.StrictMode>
);
