import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import GlobalBrewCard from './GlobalBrewCard';

const GlobalBrewsList = ({currentId}) => {
    const [brews, setBrews] = useState([]);
    const [favorites, setFavorites] = useState([]);

    //get all entries
    useEffect(() => {
        fetch(`http://localhost:9292/api/entries`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setBrews(data)
        })
        .catch(console.error)
      }, [])

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

    console.log(brews)
    const renderBrewCard = brews.map((oneBrewsCard) => {
        const checkFavoritedId = favEntryIds.find(favId => favId === oneBrewsCard.id)
        return (
            <GlobalBrewCard 
                entry_id={oneBrewsCard.id} 
                name={oneBrewsCard.name} 
                image={oneBrewsCard.image_url} 
                location={oneBrewsCard.location}
                description={oneBrewsCard.description}
                checkFavoritedId={checkFavoritedId}
                currentId={currentId}
            />
        )
    })

    return (
        <div className='brews-list'>
            {renderBrewCard}
        </div>
    )
    
}

export default GlobalBrewsList