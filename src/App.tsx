import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import {DASHBOARD} from "./routes";
import {Dashboard} from "./Dashboard/dashboard";
import { ApolloProvider } from '@apollo/react-hooks';
import {client} from "./apollo/client";

function App() {
  return (
      <ApolloProvider client={client}>
          <Router>
              <Switch>
                  <Route path='/' exact render={() => <Redirect to={DASHBOARD}/>} />
                  <Route path={DASHBOARD} component={Dashboard}/>
              </Switch>
          </Router>
      </ApolloProvider>
  );
}

export default App;
