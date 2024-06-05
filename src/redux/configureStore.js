import { legacy_createStore, compose, combineReducers } from 'redux';

import serviceAddReducer from './reducers/serviceAddReducer';
import serviceListReducer from './reducers/serviceListReducer';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      add: serviceAddReducer,
      list: serviceListReducer,
    }),
    compose(ReactReduxDevTools)
  );
}

export default configureStore;
