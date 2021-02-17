import React from "react";
import {TopMenu} from "../TopMenu/top.menu";
import './dashboard.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import {DASHBOARD, INFO, PRODUCTS, REQUEST} from "../routes";
import {Products} from "../Products/products";
import {MenuBar} from "../Menu/menu.bar";
import {Request} from "../Request/request";
import {Info} from "../Info/info";

export const Dashboard: React.FC = () => {

    return (
      <div  className="h-screen flex flex-col">
          <div className="bg-white pt-2">
              <TopMenu />
              <MenuBar />
          </div>
          <div className="mt-5 flex-1">
              <Switch>
                  <Route path={DASHBOARD} exact >
                      <Redirect to={PRODUCTS}/>
                  </Route>
                  <Route path={PRODUCTS} component={Products}/>
                  <Route path={REQUEST} component={Request}/>
                  <Route path={INFO} component={Info}/>
              </Switch>
          </div>
      </div>
    );
};
