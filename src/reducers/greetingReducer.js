import { GET_GREETINGS, ADD_GREETING, DELETE_GREETING, GREETINGS_LOADING} from './../actions/types';
 
 
const initialState = {
    greetings: [],
    loading: false
}


 export default function (state = initialState, action) {
    switch(action.type){
        case GET_GREETINGS:
            return {
                ...state,
                greetings: action.payload,
                loading: false
            };
        case DELETE_GREETING:
            return{
                ...state,
                greetings: state.greetings.filter(greeting => greeting._id !== action.payload)
            };
        case ADD_GREETING:
            return{
                ...state,
                greetings: [action.payload,...state.greetings]
            };
        case GREETINGS_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state;

    }
 }