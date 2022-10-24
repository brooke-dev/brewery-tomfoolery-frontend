import React, { useState, useEffect } from 'react';
import FaveBrewsList from './FavBrewsList';

const FavoriteBrews = ({id}) => {
    const [favorites, setFavorites] = useState([]);

    //get favorites for specific user
    useEffect(() => {
        fetch(`http://localhost:9292/api/favorited_entries/users/${id}`)
        .then(res => res.json())
        .then(data => {
            setFavorites(data)
        })
      }, [id])

      //delete favorite from favorites list
      const handleDeleteFavorite = (id) => {
        const newFavorites = favorites.filter((favorite) => {
          return favorite.id !== id;
        })
        setFavorites(newFavorites);
      }

    return (
        <div className='brews-container'>
            <h1>My Favorites</h1>
            <FaveBrewsList favorites={favorites} onDelete={handleDeleteFavorite}/>
        </div>

    )
}

export default FavoriteBrews