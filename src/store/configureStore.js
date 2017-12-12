import { createStore } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import reducers from '../reducers';

const config = {
  key: 'root',
  storage,
};

const reducer = persistCombineReducers(config, reducers);

export default function configureStore() {
  const store = createStore(reducer);
  const persistor = persistStore(store);

  return { persistor, store };
}
