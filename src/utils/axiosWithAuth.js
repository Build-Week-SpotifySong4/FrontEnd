import axios from 'axios';

export const spotifyWithAuth = () => {
    const spotifyToken = window.localStorage.getItem('spotifyToken');
    return axios.create({
        headers: {
            authorization: spotifyToken
        },
        baseURL: 'https://api.spotify.com/v1/'
    });
}