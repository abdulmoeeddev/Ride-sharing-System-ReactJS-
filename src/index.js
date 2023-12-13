import React from "react";
import ReactDOM from "react-dom";
import Routess from "./Routes/Routes";
import "./style/index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "aos/dist/aos.css";

ReactDOM.render(
  <React.StrictMode>
    <Routess />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
