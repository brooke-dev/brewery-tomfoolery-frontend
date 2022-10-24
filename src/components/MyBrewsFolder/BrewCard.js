import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const BrewCard = ({name,image,location,description}) => {
    const [isFavorited, setIsFavorited] = useState(false);

    const handleFavorite = () => {
        if (!isFavorited) {
            fetch("http://localhost:9292/api/favorites", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(
                "THIS NEEDS TO BE SOMETHING ELSE"
              ),
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