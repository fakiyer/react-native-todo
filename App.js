import React from 'react';
// import {Provider} from 'react-redux';
// import configureStore from './store/configureStore';
import Root from './src/Root';

export default class App extends React.Component {
  render() {
    return (
      // <Provider store={store}>
      <Root />
      // </Provider>
    );
  }
}
