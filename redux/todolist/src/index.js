import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import { createStore, applyMiddleware } from "redux";

// redux learn
// import Gun from "./gun/app";
// import { counter } from "./gun/reducer";
// async  applyMiddleware

// const store = createStore(
//   counter,
//   applyMiddleware(thunkMiddleware, createLogger)
// );

import App from "./App";
import rootReducer from "./reducer/index";
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
