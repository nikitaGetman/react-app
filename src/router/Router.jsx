import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import MainLayout from '../components/layouts/Main/MainLayout';
import { PATHS } from '../constants/paths';

import routes from './routes';

const Router = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          {routes.map((route) => (
            <Route exact={route.exact} path={route.path} component={route.component} key={route.path} />
          ))}

          <Redirect to={PATHS.root} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};

export default Router;
