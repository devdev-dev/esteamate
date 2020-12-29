import { CssBaseline } from '@material-ui/core';
import firebase from "firebase/app";
import "firebase/auth";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import App from './App';
import configureStore, { history, initialAppState } from './functions/redux';
import reportWebVitals from './reportWebVitals';

var firebaseConfig = {
  apiKey: 'AIzaSyCVE5c_sCIZKC0Dv1U8_Bk3ui3LdP144OE',
  authDomain: 'esteem-42.firebaseapp.com',
  projectId: 'esteem-42',
  storageBucket: 'esteem-42.appspot.com',
  messagingSenderId: '968468906415',
  appId: '1:968468906415:web:8a4aa9eaec77469e7eef5a',
  measurementId: 'G-CZCWLBRL5D'
};

const store = configureStore(initialAppState);
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...{ firebase, config: {}, dispatch: store.dispatch }}>
        <CssBaseline />
        <App history={history} />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
