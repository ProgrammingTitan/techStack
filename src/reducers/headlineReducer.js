import { GET_HEADLINES, ADD_HEADLINE, DELETE_HEADLINE, HEADLINES_LOADING} from './../actions/types';
 
 
const initialState = {
    headlines: [],
    loading: false
}


 export default function (state = initialState, action) {
    switch(action.type){
        case GET_HEADLINES:
            return {
                ...state,
                headlines: action.payload,
                loading: false
            };
        case DELETE_HEADLINE:
            return{
                ...state,
                headlines: state.headlines.filter(headline => headline._id !== action.payload)
            };
        case ADD_HEADLINE:
            return{
                ...state,
                headlines: [action.payload,...state.headlines]
            };
        case HEADLINES_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state;

    }
 }