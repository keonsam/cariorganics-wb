import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import {DASHBOARD} from "./routes";
import {Dashboard} from "./Dashboard/dashboard";

function App() {
  return (
      <Router>
          <Switch>
              <Route path='/' exact render={() => <Redirect to={DASHBOARD}/>} />
              <Route path={DASHBOARD} component={Dashboard}/>
          </Switch>
      </Router>
  );
}

export default App;
