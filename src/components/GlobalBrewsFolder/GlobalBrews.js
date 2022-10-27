import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
import GlobalBrewsList from'./GlobalBrewsList'

const GlobalBrews = ({currentId,search,setSearch}) => {
    
    return (
        <>
        <div className='brews-container'>
            <div className="global-brews-container">
            <Search search={search} setSearch={setSearch}/>
                <h1>Global Brews</h1>
                <GlobalBrewsList 
                    currentId={currentId}
                    search={search}
                    setSearch={setSearch}
                />
            </div>
        </div>
        </>

    )
}

export default GlobalBrews