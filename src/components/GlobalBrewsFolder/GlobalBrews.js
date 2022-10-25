import React from 'react';
import { Link } from 'react-router-dom';
import GlobalBrewsList from'./GlobalBrewsList'

const GlobalBrews = ({currentId}) => {
    
    return (
        <div className='brews-container'>
            <h1>Global Brews</h1>
            <GlobalBrewsList currentId={currentId}/>
        </div>

    )
}

export default GlobalBrews