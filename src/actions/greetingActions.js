import { GET_GREETINGS, ADD_GREETING, DELETE_GREETING, GREETINGS_LOADING} from './types';
import axios from 'axios';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getGreetings = () => dispatch => {
    dispatch(setGreetingsLoading());
    axios.get('/api/greetings')
    .then(res => 
        dispatch({
            type: GET_GREETINGS,
            payload: res.data
        }) 
    )
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
;}

export const addGreeting = (greeting) => (dispatch, getState) => {
   axios
    .post('/api/greetings', greeting, tokenConfig(getState))
    .then(res => 
        dispatch({
            type: ADD_GREETING,
            payload: res.data
        })
    )
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
;}


export const deleteGreeting = (id) => (dispatch, getState) => {
    axios.delete(`/api/greetings/${id}`, tokenConfig(getState)).then( res =>
        dispatch({
            type:DELETE_GREETING,
            payload: id
        })
        
    );
;}


export const setGreetingsLoading = () => {
    return {
        type: GREETINGS_LOADING
    }
};