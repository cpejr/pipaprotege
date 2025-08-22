import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "./AppProvider.jsx";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>
);
