import { Container } from '@material-ui/core';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import React from 'react';
import { matchPath, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import BottomAppBar from './components/BottomAppBar';
import SignInCreateScreen from './screens/auth/SignInCreateScreen';
import SignInResetScreen from './screens/auth/SignInResetScreen';
import SignInScreen from './screens/auth/SignInScreen';
import Dashboard from './screens/Dashboard';

interface AppProps {
  history: History;
}
const App = ({ history }: AppProps) => {
  return (
    <ConnectedRouter history={history}>
      <Container>
        <BottomAppBar />
        <Switch>
          <PrivateRoute path="/" isAuthenticated={true} component={Dashboard} />
          <Route exact path="/signin" component={SignInScreen} />
          <Route path="/signin/create" component={SignInCreateScreen} />
          <Route path="/signin/reset" component={SignInResetScreen} />
        </Switch>
      </Container>
    </ConnectedRouter>
  );
};

const PrivateRoute = ({ component, isAuthenticated, ...rest }: any) => {
  const location = useLocation();
  const RouteComponent = (props: any) => {
    if (isAuthenticated) {
      const match = matchPath(location.pathname, {
        path: '/app',
        exact: true,
        strict: false
      });

      if (match) {
        return React.createElement(component, props);
      } else {
        return <Redirect to={{ pathname: '/app' }} />;
      }
    } else {
      return <Redirect to={{ pathname: '/signin' }} />;
    }
  };

  return <Route {...rest} render={RouteComponent} />;
};

export default App;
