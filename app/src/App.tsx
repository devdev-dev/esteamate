import { Container } from '@material-ui/core';
import React from 'react';
import BottomAppBar from './components/BottomAppBar';
import LoginScreen from './screens/SignInScreen';

function App() {
  return (
    <Container>
      <BottomAppBar />
      <LoginScreen />
    </Container>
  );
}

export default App;
