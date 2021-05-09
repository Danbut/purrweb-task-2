import React from 'react';

import 'react-native-gesture-handler';

import {persistor, store} from './src/state/store';
import {Provider} from 'react-redux';
import {Navigation} from './src/navigation';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/assets';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Navigation />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
