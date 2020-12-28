import { Container } from '@material-ui/core';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BottomAppBar from './components/BottomAppBar';
import ResetPasswordScreen from './screens/auth/SignInResetScreen';
import SignInScreen from './screens/auth/SignInScreen';
import SignInCreateScreen from './screens/auth/SignInCreateScreen';

interface AppProps {
  history: History;
}
const App = ({ history }: AppProps) => {
  return <ConnectedRouter history={history}>{routes}</ConnectedRouter>;
};

const routes = (
  <Container>
    <BottomAppBar />
    <Switch>
      <Route exact path="/signin" component={SignInScreen} />
      <Route path="/signin/create" component={SignInCreateScreen} />
      <Route path="/signin/reset" component={ResetPasswordScreen} />
    </Switch>
  </Container>
);

export default App;
