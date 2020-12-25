import { Container } from '@material-ui/core';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BottomAppBar from './components/BottomAppBar';
import ResetPasswordScreen from './screens/auth/ResetPasswordScreen';
import SignInScreen from './screens/auth/SignInScreen';
import SignUpScreen from './screens/auth/SignUpScreen';

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
      <Route exact path="/" component={SignInScreen} />
      <Route path="/signup" component={SignUpScreen} />
      <Route path="/reset" component={ResetPasswordScreen} />
    </Switch>
  </Container>
);

export default App;
