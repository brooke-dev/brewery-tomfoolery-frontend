import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='nav'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/myBrews">My Brews</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
        </div>

    )
}

export default NavBar