import loggedReducer from './isLogged'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    isLogged: loggedReducer
});

export default rootReducers;