import {
    FETCHING_LOGIN_SUCCESS,
    FETCHING_LOGIN_ERROR,
    FETCHING_REGISTER_SUCCESS,
    FETCHING_REGISTER_ERROR
} from '../actions/dashboardActions';

const initialState = {
    user: {
    username: '',
    password: ''
    },
    error: null
}

export const dashboardReducer = ( state = initialState, action ) => {
    // console.log('im the action', action)
    switch(action.type) {
        case FETCHING_LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case FETCHING_LOGIN_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case FETCHING_REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case FETCHING_REGISTER_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state;
    }
}