import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Theme from "../src/components/theme/index";


ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <App></App>
  </ThemeProvider>,
  document.getElementById("root")
);
