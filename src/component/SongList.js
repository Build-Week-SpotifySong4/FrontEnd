import React, { useState, useEffect } from 'react';

import { spotifyWithAuth } from '../utils/axiosWithAuth';


const SongList = () => {
    const [songList, setSongList] = useState([]);
    const [query, setQuery] = useState('');

    console.log(query)

    useEffect(() => {
        
        spotifyWithAuth().get(`search?q=${encodeURI(query)}&type=track`)
                // console.log('this is the songs results', res.data)
                .then( res => {
                    console.log(res.data)
                    setSongList(res.data.tracks.items)
                })   
                .catch( err => {
                    console.log('Error with get request for songs', err)
            })
    }, [query]);

    const handleChange = e => {
        setQuery(e.target.value)
    };

    return (
        <div>
            <h1 className='test'>TEST</h1>
            <form>
                <input 
                    type="text"
                    name='query'
                    id='query'
                    placeholder="Enter song"
                    value={query}
                    onChange={handleChange}
                />
            </form>
            {songList.map( song => {
                return (
                    <div>
                        <p>{song.items}</p>
                    </div>    
                )
            })}
        </div>

    )
}


export default SongList;