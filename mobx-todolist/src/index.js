import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import App from "./pages/todo";
import registerServiceWorker from "./registerServiceWorker";
import * as stores from "./pages/store/index";

import "./index.css";

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
