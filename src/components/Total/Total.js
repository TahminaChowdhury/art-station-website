import React from 'react';
import './Total.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'


const Total = (props) => {
    const artists =props.artist;
    let total = 0;
    for(const artist of artists ){
        total = total + artist.salary;
    }
    
    return (
        <div className="text-white text-center pt-2">
            <h3 className="fw-bold"><FontAwesomeIcon icon={faUser} /> Artists Added: {props.artist.length}</h3>
            <h4 className="fw-bold pt-2">Total Cost: $ {total}</h4>
            <ul>
                {artists.map(artist => {
                    return (
                        <div className="bg-light rounded-3 mt-4     
                            d-flex align-center" id="name-div">
                            <img className="w-25" src={artist.img} alt="" />
                            <h6 className=" text-dark py-2 ms-4">{artist.name}</h6>
                        </div>
                    )
                })}
            </ul>
            <button className="btn btn-outline-primary text-white w-25">Buy</button>
        </div>
    );
};

export default Total;