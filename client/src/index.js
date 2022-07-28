import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

//axios config
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const { REACT_APP_BASE_URL } = process.env;
axios.defaults.baseURL = REACT_APP_BASE_URL;


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
