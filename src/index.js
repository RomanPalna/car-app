import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);
// eslint-disable-next-line no-lone-blocks
{
  /* <React.StrictMode>
</React.StrictMode>, */
}
