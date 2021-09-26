import React from 'react';



const Total = (props) => {
    const artists =props.artist;
    let total = 0;
    let artistName ='';
    for(const artist of artists ){
        total = total + artist.salary;
        artistName= artistName + artist.name;
    }
    
    return (
        <div className="text-white text-center pt-2">
            <h3 className="fw-bold">Artists Added: {props.artist.length}</h3>
            <h4 className="fw-bold">Total Cost: $ {total}</h4>
            <h4>{artistName}</h4>
            <button className="btn btn-outline-primary w-25">Buy</button>
        </div>
    );
};

export default Total;