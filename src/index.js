import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import reduxThunk from "redux-thunk";

import rootReducer from "./rootReducer";
import { DashView } from "./components/Dashboard";

const createStoreWithMiddleware = compose(
  applyMiddleware(reduxThunk)(createStore)
);
const store = createStoreWithMiddleware(rootReducer);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={DashView} />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
