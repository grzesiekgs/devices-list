import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, combineReducers, createStore, Middleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { aislesReducer } from './aisles/reducer';
import { appReducer } from './app/reducer';
import { devicesReducer } from './devices/reducer';
import { initialState } from './initialState';
import rootSaga from './rootSaga';
import { RootState } from './types';

const bindMiddleware = (middlewares: Middleware[]) => {
  if (process.env.NODE_ENV === 'development') {
    return composeWithDevTools(applyMiddleware(...middlewares));
  }

  return applyMiddleware(...middlewares);
};

export const initializeStore = (): Store<RootState> => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combineReducers<RootState>({
      app: appReducer,
      devices: devicesReducer,
      aisles: aislesReducer
    }),
    initialState,
    bindMiddleware([sagaMiddleware])
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const reduxWrapper = createWrapper<Store<RootState>>(initializeStore, {
  debug: false // process.env.NODE_ENV === 'development'
});
