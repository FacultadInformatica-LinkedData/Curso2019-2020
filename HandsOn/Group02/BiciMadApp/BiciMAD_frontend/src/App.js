import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet';
import './App.css';
import Landing from './components/Landing/Landing';
import Planner from './containers/Planner/Planner';
import RouteResult from './containers/RouteResult/RouteResult';

const app = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/planner" component={Planner} />
        <Route path="/route" component={RouteResult} />
        <Redirect to="/" />
      </Switch>
    </>
  )
}

export default app;