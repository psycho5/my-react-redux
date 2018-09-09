import React from "react";
import { PropTypes } from "prop-types";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import App from "./App";

const browserHistory = createBrowserHistory();

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route exact path="/:filter?" component={App} />
    </Router>
  </Provider>
);

export default Root;

Root.propTypes = {
  store: PropTypes.object.isRequired
};
