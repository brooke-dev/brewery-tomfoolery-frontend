import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({username, id, handleLogOut}) => {
    return (
        <div className='nav'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/myBrews">My Brews</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
            <span>
                Logged in as: {username}, id: {id}
                <button onClick={handleLogOut}>Sign Out</button>
            </span>
        </div>

    )
}

export default NavBar