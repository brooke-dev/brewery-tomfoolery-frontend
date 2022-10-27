import React from 'react';
import FaveBrewsCard from "./FavBrewsCard"

const FavBrewsList = ({onDelete, favorites}) => {

    const renderFavorites = favorites.map (favorite => {
        return (
            <FaveBrewsCard key={favorite.id} favDetails={favorite} onDelete={onDelete}/>
        )
    })
    
    return (
        <div className='brews-list'>
            {renderFavorites}
        </div>
    )
}

export default FavBrewsList