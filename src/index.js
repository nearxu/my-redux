import React from "react";
import ReactDOM from "react-dom";

import App from "./app";
import { createStore, applyMiddleware } from "./redux/redux";
import thunk from "./redux/redux-thunk";
import arrThunk from "./redux/redux-array";
import { Provider } from "./redux/react-redux";
import counter from "./counter-reduce";

const store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(arrThunk, thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
