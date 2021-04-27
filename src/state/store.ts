import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import authReducer from './ducks/auth/authSlice';
import columnsReducer from './ducks/columns/columnsSlice';
import prayersReducer from './ducks/prayers/prayersSlice';
import commentsReducer from './ducks/comments/commentsSlice';
import createSagaMiddleware from 'redux-saga';
import {watcherSaga} from './sagas/watcherSaga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const reducer = combineReducers({
  auth: authReducer,
  columns: columnsReducer,
  prayers: prayersReducer,
  comments: commentsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    sagaMiddleware,
  ],
});

export const persistor = persistStore(store);

sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
