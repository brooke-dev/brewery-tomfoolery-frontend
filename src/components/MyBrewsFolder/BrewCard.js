import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const BrewCard = ({id, name,image,location,description}) => {
    const [isFavorited, setIsFavorited] = useState(false);
    const [currEntry, setEntry] = useState({})

    useEffect(() => {
      fetch("http://localhost:9292/api/entries")
      .then(res => res.json())
      .then(data => {
        const currEnt = data.find(d =>  d.name === name && d.location === location && d.description === description)
        setEntry(currEnt)
      })
      .catch(console.error)
    }, [])

    const handleFavorite = () => {
      console.log(currEntry)
      console.log(id)

        if (!isFavorited) {
            fetch("http://localhost:9292/api/favorites", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({user_id: id, entry_id: currEntry.id
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
            <button className='favorite-btn' onClick={handleFavorite}>{isFavorited? "Favorited!" : "Add to Favorites"}</button>
        </div>

    )
}

export default BrewCard