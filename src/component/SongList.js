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
                    console.log(res.data.tracks.items)
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

                console.log(song.album.images[0])
                return (
                    <div className='songList'>
                        <div>
                            <img src={song.album.images[1].url}></img>
                            <p className='songInfo'>{song.name}</p>
                            <button>SAVE</button>
                        </div>   
                    </div> 

                )
            })}
        </div>
    )
}
export default SongList;