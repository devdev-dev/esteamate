import { Container } from '@material-ui/core';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import React from 'react';
import { useSelector } from 'react-redux';
import { isEmpty, isLoaded } from 'react-redux-firebase';
import { Redirect, Route, Switch } from 'react-router-dom';
import BottomAppBar from './components/BottomAppBar';
import { AppState } from './functions/redux';
import SignInCreateScreen from './screens/auth/SignInCreateScreen';
import SignInResetScreen from './screens/auth/SignInResetScreen';
import SignInScreen from './screens/auth/SignInScreen';
import Dashboard from './screens/Dashboard';

interface AppProps {
  history: History;
}

const App = ({ history }: AppProps) => {
  const auth = useSelector((state: AppState) => state.firebase!.auth);
  const isAuthenticated = isLoaded(auth) && !isEmpty(auth);

  return (
    <ConnectedRouter history={history}>
      <Container>
        <BottomAppBar />
        <Switch>
          <Route exact path="/" render={() => (isAuthenticated ? <Redirect to={{ pathname: '/app' }} /> : <Redirect to={{ pathname: '/signin' }} />)} />
          <React.Fragment>
            <Route exact path="/signin" component={SignInScreen} />
            <Route exact path="/signin/create" component={SignInCreateScreen} />
            <Route exact path="/signin/reset" component={SignInResetScreen} />
          </React.Fragment>
          <Route exact path="/app" component={Dashboard} />
        </Switch>
      </Container>
    </ConnectedRouter>
  );
};

export default App;
