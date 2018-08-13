import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import * as ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store/index";
import "bootstrap/dist/css/bootstrap.css";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
