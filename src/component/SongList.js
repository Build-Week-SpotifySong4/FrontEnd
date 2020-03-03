import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';


const SongList = (props) => {
    const [songList, setSongList] = useState();

    useEffect(() => {
        
        axiosWithAuth().get('https://damp-hamlet-68165.herokuapp.com/api/songs')
            .then( res => {
                console.log('this is the songs results', res.data)
                setSongList(res.data)
            })
            .catch( err => {
                console.log('Error with get request for songs', err)
            })
    }, [])

    return (
        <div>
            <h1 className='test'>TEST</h1>
            {/* {songList.map( song => {
                return (
                    <div>
                        <p>{song.songs}</p>
                    </div>    
                )
            })} */}
        </div>

    )
}

export default SongList;