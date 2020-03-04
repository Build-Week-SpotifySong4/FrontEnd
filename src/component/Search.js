import React, { useState, useEffect } from 'react'
import { spotifyWithAuth } from '../utils/axiosWithAuth'

function Search (props) {

    

const queryChangeHandler = e => {
    props.setQuery(e.target.value)
}

return (
    <div>
        <form>
            <label>Start Searchin:
                <input
                type='text'
                value={props.query}
                onChange={queryChangeHandler}
                >
                </input>
            </label>
        </form>
    </div>
)


}

export default Search


// useEffect(() => {
//     const searchSong = songData.filter(song => song.name.toLowerCase().includes(query.toLowerCase()))
//     setSongData()
// },[])