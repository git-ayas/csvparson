import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ingest from './components/ingest.js';
import read from "./components/read.js";
import './App.css';

const routes = [
  {
    path: "/ingest",
    component: ingest
  },
  {
    path: "/view",
    component: read,

  }
];

const initialState = {
  data: {}
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'converted':
      state.data = action.data;
      break;
    default:

  }
  console.log('reducer', state, action);
  return state;

}

const store = createStore(reducer);

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          
          <ul>
            <li><Link to="/ingest">Load Data</Link></li>
            <li><Link to="/view">View Loaded Data</Link></li>
          </ul>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route}></RouteWithSubRoutes>
            ))}
          </Switch>
        </Router>
      </Provider>
    )
  }
};
// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
