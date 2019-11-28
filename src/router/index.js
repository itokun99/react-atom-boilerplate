import { React, BrowserRouter, Route, Switch } from 'libraries';
import { NotFound404 } from 'pages';
import nav from './nav';

const AppRoute = props => (
  <BrowserRouter>
    <Switch>
      {nav.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          component={routerProps => (
            <route.component {...routerProps} {...props} />
          )}
          exact
        />
      ))}
      <Route
        component={routerProps => <NotFound404 {...routerProps} {...props} />}
      />
    </Switch>
  </BrowserRouter>
);

export default AppRoute;
