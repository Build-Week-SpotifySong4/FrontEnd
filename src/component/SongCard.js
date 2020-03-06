import React from 'react';

const SongCard = (props) => {
    return (
        <div>
          <img>{props.image}</img>
          <p>{props.artists}</p>
          <p>{props.name}</p>
            <p>{props.popularity}</p>
            <p>{props.preview_url}</p>         
        </div>
    )
}

export default SongCard;