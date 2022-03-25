import React from 'react'
import {BrowserRouter as Router, 
    Routes,
    Route,
    Navigate} 
    from 'react-router-dom';
import { Form } from '../components/Form';
import { List } from '../components/List';
import { Navbar } from '../components/Navbar';

export const AppRouter = () => {
    return (
        <div>
            <Router>
            <Navbar/>
                <Routes>
                    <Route path="/pp_anime/animes" element={<List/>}/>
                    <Route path="/pp_anime/form" element={<Form/>}/>
                    <Route path="/pp_anime/*" element={<Navigate to="/"/>}/>
                </Routes>
            </Router>
        </div>
    )
}
