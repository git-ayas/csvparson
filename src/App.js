
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ingest from './components/ingest.js'
import './App.css';

const routes = [
  {
    path: "/ingest",
    component: ingest
  },
  {
    path: "/view",
    component: null,

  }
];

export default class App extends Component { 

  render() {
    return (
      <Router>
        <Link to="/ingest">Tacos</Link>
        <Switch>
          {routes.map((route, i) => (
           <RouteWithSubRoutes key = { i } { ...route }></RouteWithSubRoutes>
          ))}

      </Switch>

      </Router>
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
