import { GET_HEADLINES, ADD_HEADLINE, DELETE_HEADLINE, HEADLINES_LOADING} from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';
import axios from 'axios';

export const getHeadlines = () => dispatch => {
    dispatch(setHeadlinesLoading());
    axios.get('/api/headlines')
    .then(res => 
        dispatch({
            type: GET_HEADLINES,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
;}

export const addHeadline = (headline) => (dispatch, getState) => {
   axios
    .post('/api/headlines', headline, tokenConfig(getState))
    .then(res => 
        dispatch({
            type: ADD_HEADLINE,
            payload: res.data
        })
    )
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
;}


export const deleteHeadline = (id) => (dispatch, getState) => {
    axios.delete(`/api/headlines/${id}`, tokenConfig(getState)).then( res =>
        dispatch({
            type:DELETE_HEADLINE,
            payload: id
        })
        
    );
;}


export const setHeadlinesLoading = () => {
    return {
        type: HEADLINES_LOADING
    }
};