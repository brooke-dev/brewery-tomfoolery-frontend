import React from 'react';

const FavBrewsCard = ({favDetails}) => {


    return (
        <div className='brew-card'>
            <h3>{favDetails.name}</h3>
            <img src={favDetails.image_url} alt={favDetails.name} />
            <p>{favDetails.location}</p>
            <p>{favDetails.description}</p>
            <button className='delete-btn'>X</button>
        </div>

    )
}

export default FavBrewsCard