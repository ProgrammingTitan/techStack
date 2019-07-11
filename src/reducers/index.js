import {combineReducers} from 'redux';
import greetingReducer from './greetingReducer';
import headlineReducer from './headlineReducer';
import updateReducer from './updateReducer';
import adReducer from './adReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    greeting: greetingReducer,
    headline: headlineReducer,
    ad: adReducer,
    update: updateReducer,
    auth: authReducer,
    error: errorReducer
});