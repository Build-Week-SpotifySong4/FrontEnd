import { axiosWithAuth } from '../utils/axiosWithAuth';

export const SAVING_SONG_SUCCESS = 'SAVING_SONG_SUCCESS';
export const SAVING_SONG_ERROR = 'SAVING_SONG_ERROR';
export const DELETE_SONG_SUCCESS = 'DELETE_SONG_SUCCESS';
export const DELETE_SONG_ERROR = 'DELETE_SONG_ERROR';


export const saveFavorite = (user, id) => dispatch => {
    axiosWithAuth().post(`/songs/${id}`, user)
        .then( res => {
            dispatch({type: SAVING_SONG_SUCCESS, payload: res.data});
        })
        .catch( error => {
            dispatch({type: SAVING_SONG_ERROR, payload: error})
        })
}

export const deleteFavorite = (user, id) => dispatch => {
    axiosWithAuth.delete(`/songs/${id}`, user)
        .then( res => {
            dispatch({type: DELETE_SONG_SUCCESS, payload: res.data})
        })
        .catch( error => {
            dispatch({type: DELETE_SONG_ERROR, payload: error})
        })
}