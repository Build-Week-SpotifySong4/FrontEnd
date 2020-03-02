import { axiosWithAuth } from "../utils/axiosWithAuth"

const FETCHING_LOGIN_START = 'FETCHING_LOGIN_START';

export const getLogin = () => dispatch => {
    dispatch({ type: FETCHING_LOGIN_START })
        axiosWithAuth.get('/auth/login')
}