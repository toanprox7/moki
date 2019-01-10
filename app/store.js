import RootReducer from './reducers/index';
var redux = require('redux');
// var store = redux.createStore(AppList);
var store = redux.createStore(RootReducer,
    window.devToolsExtension? window.devToolsExtension(): f => f
  );

export default store;