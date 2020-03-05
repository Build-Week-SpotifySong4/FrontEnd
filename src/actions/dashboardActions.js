import axios from 'axios';
// import { axiosWithAuth } from "../utils/axiosWithAuth"


export const FETCHING_LOGIN_SUCCESS = 'FETCHING_LOGIN_SUCCESS';
export const FETCHING_LOGIN_ERROR = 'FETCHING_LOGIN_ERROR';
export const FETCHING_REGISTER_SUCCESS = 'FETCHING_REGISTER_SUCCESS';
export const FETCHING_REGISTER_ERROR = 'FETCHING_REGISTER_ERROR';

export const getLogin = (user, props) => dispatch => {
        axios.post('https://damp-hamlet-68165.herokuapp.com/api/auth/login', user)
            .then( res => {
                dispatch({type: FETCHING_LOGIN_SUCCESS, payload: res.data});
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('spotifyToken', res.data.spotifyToken)
                props.history.push('/homepage');
            })
            .catch( error => {
                dispatch({ type: FETCHING_LOGIN_ERROR, payload: error })
            })           
}

export const getRegister = (user, props) => dispatch => {
        axios.post('https://damp-hamlet-68165.herokuapp.com/api/auth/register', user)
            .then( res => {
                dispatch({type: FETCHING_REGISTER_SUCCESS, payload: res.data})
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('spotifyToken', res.data.spotifyToken)
                props.history.push('/login')
            })
            .catch( error => {
                dispatch({type: FETCHING_REGISTER_ERROR, payload: error})
            })
}