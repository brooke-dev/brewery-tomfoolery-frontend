import React from 'react';
import { Link } from 'react-router-dom';
import BrewsList from'./BrewsList'

const MyBrews = ({filterMyBrewsCards,id}) => {
    return (
        <div className='brews-container'>
            <h1>My Brews</h1>
            <BrewsList currentId={id} filterMyBrewsCards={filterMyBrewsCards}/>
        </div>

    )
}

export default MyBrews