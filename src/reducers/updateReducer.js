import { GET_UPDATES, ADD_UPDATE, DELETE_UPDATE, UPDATES_LOADING} from './../actions/types';
 
 
const initialState = {
    updates: [],
    loading: false
}


 export default function (state = initialState, action) {
    switch(action.type){
        case GET_UPDATES:
            return {
                ...state,
                updates: action.payload,
                loading: false
            };
        case DELETE_UPDATE:
            return{
                ...state,
                updates: state.updates.filter(update => update._id !== action.payload)
            };
        case ADD_UPDATE:
            return{
                ...state,
                updates: [action.payload,...state.updates]
            };
        case UPDATES_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state;

    }
 }