import { GET_UPDATES, ADD_UPDATE, DELETE_UPDATE, UPDATES_LOADING} from './types';
import axios from 'axios';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getUpdates = () => dispatch => {
    dispatch(setUpdatesLoading());
    axios.get('/api/updates')
    .then(res => 
        dispatch({
            type: GET_UPDATES,
            payload: res.data
        }) 
    )
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
;}

export const addUpdate = (update) => (dispatch,getState) => {
   axios
    .post('/api/updates', update, tokenConfig(getState))
    .then(res => 
        dispatch({
            type: ADD_UPDATE,
            payload: res.data
        })
    )
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
;}


export const deleteUpdate = (id) => (dispatch, getState) => {
    axios.delete(`/api/updates/${id}`, tokenConfig(getState)).then( res =>
        dispatch({
            type:DELETE_UPDATE,
            payload: id
        })
        
    );
;}


export const setUpdatesLoading = () => {
    return {
        type: UPDATES_LOADING
    }
};