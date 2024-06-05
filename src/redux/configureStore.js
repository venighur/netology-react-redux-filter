import { legacy_createStore, compose, combineReducers } from 'redux';

import serviceAddReducer from './reducers/serviceAddReducer';
import serviceListReducer from './reducers/serviceListReducer';
import serviceSearchReducer from './reducers/serviceSearchReducer';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      add: serviceAddReducer,
      list: serviceListReducer,
      filter: serviceSearchReducer,
    }),
    compose(ReactReduxDevTools)
  );
}

export default configureStore;
