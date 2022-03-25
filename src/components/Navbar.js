import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Nav.css';


export const Navbar = () => {
    return (
        <div>
            <div className="header">
                <nav className='navbar'>
                    <Link className="link" to="/"><img src="https://res.cloudinary.com/dainl1ric/image/upload/v1648187823/kerberos_mgj3hk.png" className='img-nav' /></Link>    
                    <Link className="link" to="/">Animes</Link>
                    <Link className="link" to="/form">Registro</Link>
                
                </nav>
            </div>
            <hr/>
        </div>
    )
}