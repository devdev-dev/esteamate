import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { FirebaseReducer, firebaseReducer } from 'react-redux-firebase';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import counterReducer from './counterReducer';

export const history = createBrowserHistory();

export default function configureStore(preloadedState: AppState) {
  const store = createStore(
    combineReducers({
      router: connectRouter(history),
      firebase: firebaseReducer,
      count: counterReducer
    }),
    preloadedState,
    compose(applyMiddleware(routerMiddleware(history)))
  );

  return store;
}

export interface AppState {
  router?: RouterState;
  firebase?: FirebaseReducer.Reducer;
  count: number;
}

export const initialAppState: AppState = {
  count: 0
};
