import React from 'react';
import { Link } from 'react-router-dom';

const BrewCard = ({name,image,location,description}) => {
    return (
        <div className='brew-card'>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>{description}</p>
            <p>{location}</p>
        </div>

    )
}

export default BrewCard