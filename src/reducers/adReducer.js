import { GET_ADS, ADD_AD, DELETE_AD, ADS_LOADING} from './../actions/types';
 
 
const initialState = {
    ads: [],
    loading: false
}


 export default function (state = initialState, action) {
    switch(action.type){
        case GET_ADS:
            return {
                ...state,
                ads: action.payload,
                loading: false
            };
        case DELETE_AD:
            return{
                ...state,
                ads: state.ads.filter(ad => ad._id !== action.payload)
            };
        case ADD_AD:
            return{
                ...state,
                ads: [action.payload,...state.ads]
            };
        case ADS_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state;

    }
 }