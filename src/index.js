import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

import store from "./store/index";
import App from "./containers/App";
import "./styles/index.css";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";

ReactDOM.render(
  <Provider {...store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById(`root`)
);

registerServiceWorker();
