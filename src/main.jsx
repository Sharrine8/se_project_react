import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; //instead of BrowserRouter when deploying with Vite
import App from "./components/App/App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
