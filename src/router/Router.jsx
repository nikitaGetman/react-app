import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import routes from './routes';
import { PATHS } from '../constants/paths';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => (
          <Route exact={route.exact} path={route.path} component={route.component} key={route.path} />
        ))}

        <Redirect to={PATHS.login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
