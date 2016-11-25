//Actions are payloads of information that send data from your application to your store.
//You send them to the store using store.dispatch()

class Actions {
    toggleCheck(data) {
        return {
            type: "TOGGLE_CHECK",
            data
        };
        //flux, dispatch(action) here
        //but redux does not do it
    }
    addValue(data) {
        return {
            type: "ADD_VALUE",
            data
        };
    }
}

export default Actions;
    
//export const toggleCheck = () => {
//  return {
//    type: "TOGGLE_CHECK"
//  };
//};
//
//export const incNumber = () => {
//  return {
//    type: "INC_NUMBER"
//  };
//};
//
//export const decNumber = () => {
//  return {
//    type: "DEC_NUMBER"
//  };
//};
