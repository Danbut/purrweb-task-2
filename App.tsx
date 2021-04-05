import React from 'react';

import 'react-native-gesture-handler';

import {store} from './src/state/store';
import {Provider} from 'react-redux';
import {Navigation} from './src/components/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
