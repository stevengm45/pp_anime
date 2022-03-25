import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Nav.css';


export const Navbar = () => {
    return (
        <div>
            <div className="header">
                <nav className='navbar'>
                    <Link className="link" to="/pp_anime/"><img src="https://res.cloudinary.com/dainl1ric/image/upload/v1648187823/kerberos_mgj3hk.png" className='img-nav' /></Link>    
                    <Link className="link" to="/pp_anime/animes">Animes</Link>
                    <Link className="link" to="/pp_anime/form">Registro</Link>
                
                </nav>
            </div>
            <hr/>
        </div>
    )
}