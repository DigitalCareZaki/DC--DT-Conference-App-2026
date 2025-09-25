/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import store, { persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { MainNavigator } from './src/navigation';

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
}


export default App;
