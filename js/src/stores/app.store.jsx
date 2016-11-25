
import {createStore} from 'redux';
import appReducer from '../reducers/reducers';

let store = createStore(appReducer, []); //second param is initial state -- syncron data flow only
//async use middleware

export default store;
    
    
//store.getState();
//store.dispatch(action(data));
////You can call store.dispatch(action) from anywhere in your app, including components and XHR callbacks
////The Redux store calls the reducer function you gave it.The store will pass two arguments to the reducer: the current state tree and the action.
//Your reducer returns the next application state ej combineReducers()
//the Redux store saves the complete state tree returned by the root reducer
//Every listener registered with store.subscribe(listener) will now be invoked; listeners may call store.getState() to get the current state.
//Adds a change listener. It will be called any time an action is dispatched, and some part of the state tree may potentially have changed. You may then call getState() to read the current state tree inside the callback.
//store.subscribe(function () {
//    store.getState();
//});
//It is, however, guaranteed that all subscribers registered before the dispatch() started will be called with the latest state by the time it exits.
