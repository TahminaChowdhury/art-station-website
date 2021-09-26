import React from 'react';
import './Artist.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Artist = (props) => {
    const {img, name, born, knownFor, salary} =props.artist;
    return (
        <div className="col-md-4 col-lg-4 text-center">
            <div className="bg-white my-3 pb-4 rounded-3 cart">
            <div>
                <img className="rounded-circle w-50 py-3" src={img} alt="" />
            </div>
            <div className="text-center px-3 fw-bold">
                <p>Name: {name}</p>
                <p>Born: {born}</p>
                <p>Known-For: {knownFor}</p>
                <p>price:${salary}</p>
                <button onClick={() =>props.handleAddToCart(props.artist)} className="btn btn-secondary button">Add To Cart</button>
                </div>
                </div>
        </div>
    );
};

export default Artist;