import React from "react";
import ReactDOM from "react-dom/client";
// import components
import App from "./App";
import allReducers from "./reducers";
// create store
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* store = createStore variable write here to provide all thing. */}
      <App />
    </Provider>
  </React.StrictMode>
);
