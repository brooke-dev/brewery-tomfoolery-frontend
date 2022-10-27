import React from 'react';

const FavBrewsCard = ({onDelete, favDetails}) => {
      //pass in id that is equal to entry_id in the favorite table in the backend
    const handleDelete = (id) => {
          //delete from db
        fetch(`http://localhost:9292/api/favorited_entries/entry-id/${id}`, {
             method: 'DELETE'
        })
        .then(onDelete(id)) //delete on the front-end list of the app

    }

    return (
        <div className='brew-card'>
            <h3>{favDetails.name}</h3>
            <img src={favDetails.image_url} alt={favDetails.name} />
            <p>{favDetails.location}</p>
            <p>{favDetails.description}</p>
            <button className='delete-btn' onClick={() => handleDelete(favDetails.id)}>🗑</button>
        </div>

    )
}

export default FavBrewsCard