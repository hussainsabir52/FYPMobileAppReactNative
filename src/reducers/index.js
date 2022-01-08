import loggedReducer from './isLogged'
import loadingReducer from './isLoading';
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    isLogged: loggedReducer,
    isLoading: loadingReducer
});

export default rootReducers;