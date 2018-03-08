// @flow

import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import Root from './src/Root';
import Loading from './src/components/Loading';

const { persistor, store } = configureStore();

const onBeforeLift = () => {
  // take some action before the gate lifts
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Loading color="#FFF" />}
        onBeforeLift={onBeforeLift}
        persistor={persistor}
      >
        <Root />
      </PersistGate>
    </Provider>
  );
}
