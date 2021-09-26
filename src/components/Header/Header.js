import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav className="nav-bar">
                    <a href="/art"><span className="fw-bolder fs-1">ART</span> Station</a>
                    <a href="/Painting">Painting</a>
                    <a href="/Sculpture">Sculpture</a>
                    <a href="/Drawing">Drawing</a>
                    <a href="/pricing">Pricing</a>
                    <span><input className="input" type="text" placeholder="Search here..." /><button className="click-button">Click</button></span>
            </nav>
           <div className="w-50 text-center text-light  py-5 mb-3 mt-5 mx-auto">
               <h1 className="heading text-uppercase">Art is an irreplaceable way of understanding and expressing the world</h1>
               <h3 className="py-3">Total Budget: 50 Million</h3>
           </div>
        </div>
    );
};

export default Header;