
// Exporting All The Reducers from Here
import { combineReducers } from 'redux';

// Dump Reducer Will be removed Soon
const dumpReducer = (state = "This is a Dump Reducer", action) => {
    return state
}

// Exporting the Root Reducer Here
const rootReducer = combineReducers({
    dump: dumpReducer
})

export default rootReducer;
