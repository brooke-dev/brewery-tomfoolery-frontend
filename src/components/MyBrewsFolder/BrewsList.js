import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BrewCard from './BrewCard'

const BrewsList = ({currentId, filterMyBrewsCards, handleDeleteBrew}) => {
    const [favorites, setFavorites] = useState([]);
    
    //get data from favorites saved to a user
      useEffect(() => {
        fetch(`http://localhost:9292/api/favorited_entries/users/${currentId}`)
        .then(res => res.json())
        .then(data => {
          setFavorites(data)
        })
        .catch(console.error)
      }, [])

      //array of entry_ids from favorites list
      const favEntryIds = favorites.map(fav => {
        return fav.id
      })
      
      const renderBrewCard = filterMyBrewsCards.map((oneBrewsCard) => {
        const checkFavoritedId = favEntryIds.find(favId => favId === oneBrewsCard.id)
        return (  
          <BrewCard 
            key={oneBrewsCard.id}
            user_id={currentId}
            entry_id={oneBrewsCard.id}
            checkFavoritedId={checkFavoritedId}
            name={oneBrewsCard.name}
            image={oneBrewsCard.image_url}
            location={oneBrewsCard.location}
            description={oneBrewsCard.description}
            handleDeleteBrew={handleDeleteBrew}
          />)
      })

    return (
        <div className='brews-list'>
            {renderBrewCard}
        </div>

    )
}

export default BrewsList