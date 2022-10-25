import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const BrewCard = ({user_id, entry_id, checkFavoritedId, name,image,location,description}) => {
    const [isFavorited, setIsFavorited] = useState(false);
    console.log(checkFavoritedId)
    
    // const [currEntry, setEntry] = useState({})
 //
    // useEffect(() => {
    //   fetch("http://localhost:9292/api/entries")
    //   .then(res => res.json())
    //   .then(data => {
    //     const currEnt = data.find(d =>  d.name === name && d.location === location && d.description === description)
    //     setEntry(currEnt)
    //   })
    //   .catch(console.error)
    // }, [])

    //check if a card on render is already favorited
    if (checkFavoritedId && isFavorited === false){
        setIsFavorited(true);
    }

    const handleFavorite = () => {
      console.log("user-id",user_id)
      console.log("entry-id",entry_id)

        if (!isFavorited) {
            fetch("http://localhost:9292/api/favorites", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({user_id: user_id, entry_id: entry_id
            }),
            })
            
            setIsFavorited((isFavorited) => !isFavorited);
        }
    }

    return (
        <div className='brew-card'>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>{description}</p>
            <p>{location}</p>
            <button className='favorite-btn' onClick={handleFavorite}>{isFavorited ? "Favorited!" : "Add to Favorites"}</button>
        </div>

    )
}

export default BrewCard