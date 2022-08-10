import { combineReducers, compose, legacy_createStore } from "redux";

import Reducer from "./Reducer";


const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      reducer: Reducer,
    }),
    undefined,
    compose(ReactReduxDevTools)
  );
}

export default configureStore;
