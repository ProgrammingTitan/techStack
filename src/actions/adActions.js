import { GET_ADS, ADD_AD, DELETE_AD, ADS_LOADING} from './types';
import axios from 'axios';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getAds = () => dispatch => {
    dispatch(setAdsLoading());
    axios.get('/api/featuredAds')
    .then(res => 
        dispatch({
            type: GET_ADS,
            payload: res.data
        }) 
    )
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
;}

export const addAd = (ad) => (dispatch,getState) => {
   axios
    .post('/api/featuredAds', ad, tokenConfig(getState))
    .then(res => 
        dispatch({
            type: ADD_AD,
            payload: res.data
        })
    )
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
;}


export const deleteAd = (id) => (dispatch, getState) => {
    axios.delete(`/api/featuredAds/${id}`, tokenConfig(getState)).then( res =>
        dispatch({
            type:DELETE_AD,
            payload: id
        })
        
    );
;}


export const setAdsLoading = () => {
    return {
        type: ADS_LOADING
    }
};