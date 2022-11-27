import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AsyncReact from "./AsyncReact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AsyncReact />
  </React.StrictMode>
);
