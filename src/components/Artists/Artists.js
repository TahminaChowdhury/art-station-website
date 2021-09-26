import React, { useEffect, useState } from 'react';
import './Artists.css'
import Artist from '../Artist/Artist';
import Total from '../Total/Total';



const Artists = () => {
    const [artists, setArtists] = useState([]);
    const [artist, setArtist] =useState([])
    useEffect(() => {
    fetch('artists.JSON')
    .then(res => res.json())
    .then(data => setArtists(data))
    }, []);
    const handleAddToCart = (perosn) => {
        const newArtist =[...artist, perosn];
        setArtist(newArtist)
    }
    return (
        <div className="artists-container">
            <div className="row mx-3 pt-5">
            <p className="text-light fs-1 fw-light">Featured Artists</p>
                <div className="col-md-9">
                    <div className="row">
                    {
                    artists.map(artist => <Artist 
                        key={artist.name}
                        artist ={artist}
                        handleAddToCart={handleAddToCart}
                        ></Artist>)
                    }
                    </div>
                </div>
                    <div className="col-md-3">
                    <Total artist={artist}></Total>
                </div>
            </div>
        </div>
    );
};

export default Artists;