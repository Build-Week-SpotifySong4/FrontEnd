import {
    SAVING_SONG_SUCCESS,
    SAVING_SONG_ERROR,
    DELETE_SONG_SUCCESS,
    DELETE_SONG_ERROR
} from '../actions/savedAction';

const initialState = {}

export const savedReducer = ( state = initialState, action) => {
    switch(action.type) {
        case SAVING_SONG_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case SAVING_SONG_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case DELETE_SONG_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case DELETE_SONG_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state;
    }
}