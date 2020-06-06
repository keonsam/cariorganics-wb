import React from "react";
import {TopMenu} from "../TopMenu/top.menu";
import './dashboard.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import {DASHBOARD, INFO, PRODUCTS_LIST, REQUEST} from "../routes";
import {ProductsList} from "../ProductsList/products.list";
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
                      <Redirect to={PRODUCTS_LIST}/>
                  </Route>
                  <Route path={PRODUCTS_LIST} component={ProductsList}/>
                  <Route path={REQUEST} component={Request}/>
                  <Route path={INFO} component={Info}/>
              </Switch>
          </Segment>
      </Container>
    );
};
