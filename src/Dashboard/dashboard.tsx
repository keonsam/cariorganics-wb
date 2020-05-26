import React from "react";
import {Switch, Redirect, Route } from "react-router-dom";
import {DASHBOARD, PRODUCTS_LIST} from "../routes";
import {ProductsList} from "../ProductsList/products.list";
export const Dashboard: React.FC = () => {
    return (
      <div className='dashboard'>
          <Switch>
              <Route path={DASHBOARD} exact >
                  <Redirect to={PRODUCTS_LIST}/>
              </Route>
             <Route path={PRODUCTS_LIST} component={ProductsList}/>
          </Switch>
      </div>
    );
};
