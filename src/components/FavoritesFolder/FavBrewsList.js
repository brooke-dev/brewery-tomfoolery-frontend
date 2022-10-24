import { render } from '@testing-library/react';
import React from 'react';
import FaveBrewsCard from "./FavBrewsCard"

const FavBrewsList = ({favorites}) => {

    const renderFavorites = favorites.map (favorite => {
        return (
            <FaveBrewsCard key={favorite.id} favDetails={favorite} />
        )
    })
    
    return (
        <div className='brews-list'>
            {renderFavorites}
        </div>

    )
}

export default FavBrewsList