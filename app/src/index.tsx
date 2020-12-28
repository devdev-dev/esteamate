import { CssBaseline } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore, { history, initialAppState } from './functions/redux';
import reportWebVitals from './reportWebVitals';

const store = configureStore(initialAppState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <App history={history} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
