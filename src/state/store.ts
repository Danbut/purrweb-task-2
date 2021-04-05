import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import columnsReducer from './columns/columnsSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    columns: columnsReducer,
  },
  middleware: [...getDefaultMiddleware({thunk: true}), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
