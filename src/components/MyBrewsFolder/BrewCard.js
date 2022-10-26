import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const BrewCard = ({handleDeleteBrew,user_id, entry_id, checkFavoritedId, name,image,location,description}) => {
    const [isFavorited, setIsFavorited] = useState(false);

    //check if a card on render is already favorited
    if (checkFavoritedId && isFavorited === false){
        setIsFavorited(true);
    }

    const handleFavorite = () => {

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

    // Deleting a brew logic:
    function handleDeleteClick(id){
      fetch(`http://localhost:9292/api/entries/entry-id/${id}`,{
      method: "DELETE",
      })
      handleDeleteBrew(id);
    }
  

    return (
        <div className='brew-card'>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>{description}</p>
            <p>{location}</p>
            <button className='favorite-btn' onClick={handleFavorite}>{isFavorited ? "Favorited!" : "Add to Favorites"}</button>
            
            <div className="my-card-btns">
        
              <Link to={`/myBrews/${entry_id}`}> 
              <button className='edit-btn'>✎</button>
              </Link>
              <button className='delete-btn' onClick={() => handleDeleteClick(entry_id)}>🗑</button>
            </div>
        </div>

    )
}

export default BrewCard
