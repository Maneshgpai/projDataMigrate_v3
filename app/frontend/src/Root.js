import React from "react";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { applyMiddleware, ConfigStore } from "redux";
import { routerMiddleware, ConnectedRouter } from "connected-react-router";

import rootReducer from "./Reducer";

const Root = ({ children, initialState = {} }) => {
  const history = createBrowserHistory();
  const middleware = [thunk, routerMiddleware(history)];

  const store = ConfigStore(
    rootReducer(history),
    initialState,
    applyMiddleware(...middleware)
  );

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>{children}</ConnectedRouter>
    </Provider>
  );
};

export default Root;