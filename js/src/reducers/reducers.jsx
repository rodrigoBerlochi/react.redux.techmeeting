//how the application's state changes in response

import {combineReducers} from "redux";

const initialState = {
  countries: [],
  cities: []
};

function cityReducer (state = [], action) {
    switch (action.type) {
        case "TOGGLE_CHECK":
            //do something
            return;
        case "ADD_VALUE":
            return state.concat(action.data); //immutable
        default:
            return state;
    }
}

function countryReducer (state = [], action) {
    
}

function appReducer(state = initialState, action) {
  return {
    cityReducer: cityReducer(state.cities, action),
    countryReducer: countryReducer(state.countries, action)
  };
};

export default appReducer;


//const checkBox = (store, action) => {
//  if (action.type === "TOGGLE_CHECK") {
//    return {
//      checked: !store.checked
//    };
//  }
//
//  return store || {checked: false};
//};
//
//const number = (store, action) => {
//  if (action.type === "INC_NUMBER") {
//    return {
//      value: store.value + 1
//    };
//  } else if (action.type === "DEC_NUMBER") {
//    return {
//      value: store.value - 1
//    };
//  }
//
//  return store || {value: 0};
//};
//
//export default combineReducers({
//  checkBox,
//  number
//});
