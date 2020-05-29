import React from "react";
import {TopMenu} from "../TopMenu/top.menu";
import './dashboard.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import {DASHBOARD, INFO, PRODUCTS_LIST, REQUEST} from "../routes";
import {ProductsList} from "../ProductsList/products.list";
import {Menu} from "../Menu/menu";
import {Request} from "../Request/request";
import {Info} from "../Info/info";

export const Dashboard: React.FC = () => {
    return (
      <div className="dashboard">
          <TopMenu />
          <Menu />
          <Switch>
              <Route path={DASHBOARD} exact >
                  <Redirect to={PRODUCTS_LIST}/>
              </Route>
              <Route path={PRODUCTS_LIST} component={ProductsList}/>
              <Route path={REQUEST} component={Request}/>
              <Route path={INFO} component={Info}/>
          </Switch>
      </div>
    );
};
