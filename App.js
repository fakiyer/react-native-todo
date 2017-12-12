import React from 'react';
import { Text, View } from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import Root from './src/Root';

const { persistor, store } = configureStore();

const onBeforeLift = () => {
  // take some action before the gate lifts
};

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={
            <View>
              <Text>Loading...</Text>
            </View>
          }
          onBeforeLift={onBeforeLift}
          persistor={persistor}
        >
          <Root />
        </PersistGate>
      </Provider>
    );
  }
}
