import axios from 'axios';

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token');

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'https://damp-hamlet-68165.herokuapp.com/api'
    });
}

export const spotifyWithAuth = () => {
    const spotifyToken = window.localStorage.getItem('spotifyToken');

    return axios.create({
        headers: {
            Authorization: `Bearer ${spotifyToken}`,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        baseURL: 'https://api.spotify.com/v1/'
    });
}