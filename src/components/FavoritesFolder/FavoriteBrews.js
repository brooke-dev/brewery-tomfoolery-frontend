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

      //handle delete here

    return (
        <div className='brews-container'>
            <h1>My Favorites</h1>
            <FaveBrewsList favorites={favorites} />
        </div>

    )
}

export default FavoriteBrews