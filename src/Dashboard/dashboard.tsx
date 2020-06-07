import React from "react";
import {TopMenu} from "../TopMenu/top.menu";
import './dashboard.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import {DASHBOARD, INFO, PRODUCTS, REQUEST} from "../routes";
import {Products} from "../Products/products";
import {MenuBar} from "../Menu/menu.bar";
import {Request} from "../Request/request";
import {Info} from "../Info/info";
import {Container, Segment } from "semantic-ui-react";

export const Dashboard: React.FC = () => {

    return (
      <Container fluid className="dashboard">
          <Segment vertical className="menus">
              <TopMenu />
              <MenuBar />
          </Segment>

          <Segment vertical className="body">
              <Switch>
                  <Route path={DASHBOARD} exact >
                      <Redirect to={PRODUCTS}/>
                  </Route>
                  <Route path={PRODUCTS} component={Products}/>
                  <Route path={REQUEST} component={Request}/>
                  <Route path={INFO} component={Info}/>
              </Switch>
          </Segment>
      </Container>
    );
};
