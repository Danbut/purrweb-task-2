import React from 'react';

import 'react-native-gesture-handler';

import {persistor, store} from './src/state/store';
import {Provider} from 'react-redux';
import {Navigation} from './src/components/navigation';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
