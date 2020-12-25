import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import counterReducer from './counterReducer';

export const history = createBrowserHistory();

export default function configureStore(preloadedState?: any) {
  const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(createRootReducer(history), preloadedState, composeEnhancer(applyMiddleware(routerMiddleware(history))));

  return store;
}

const createRootReducer = (history: History) =>
  combineReducers({
    count: counterReducer,
    router: connectRouter(history)
  });

export interface State {
  count: number;
  router: RouterState;
}
