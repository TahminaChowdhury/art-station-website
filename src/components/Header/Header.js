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
                    <span className="input"><input type="text" placeholder="Search here..." /><button className="btn btn-outline-light text-white">Click</button></span>
            </nav>
           <div className="w-50 text-center text-light  py-5 my-5 mx-auto">
               <h1 className="heading text-uppercase">Art is an irreplaceable way of understanding and expressing the world</h1>
               <h3>Total Paintings: 10000</h3>
           </div>
        </div>
    );
};

export default Header;