import React from 'react';
import { Link } from 'react-router-dom';
import GlobalBrewsList from'./GlobalBrewsList'

const GlobalBrews = ({currentId,search,setSearch}) => {
    
    return (
        <div className='brews-container'>
            <h1>Global Brews</h1>
            <GlobalBrewsList 
                currentId={currentId}
                search={search}
                setSearch={setSearch}
            />
        </div>

    )
}

export default GlobalBrews