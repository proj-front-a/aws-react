import React from "react";
import ReactDOM from "react-dom/client";
import { StateMachineProvider } from "little-state-machine";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateMachineProvider>
      <App />
    </StateMachineProvider>
  </React.StrictMode>
);
