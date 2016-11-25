//
// This is the client side entry point for the React app.
//

import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
//import rootReducer from "/reducers/reducers";
import AppContainer from './components/app.container.jsx';
//import {routes} from "./routes";
//import {Router} from "react-router";
//import "./styles/base.css";
//<AppContainer />
/* JSX:*/ 
ReactDOM.render(
    React.DOM.h1(null, 'hello'),
    document.getElementById('app')    
);



// Add the client app start up code to a function as window.webappStart.
// The webapp's full HTML will check and call it once the js-content
// DOM is created.
//

//window.webappStart = () => {
//  const initialState = window.__PRELOADED_STATE__;
//  const store = createStore(rootReducer, initialState);
//  render(
//    <Provider store={store}>
   //   <Router>{//routes}</Router>
 //   </Provider>//,
//    document.querySelector(".js-content")
//  );
//};

