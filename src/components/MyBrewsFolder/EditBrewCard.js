import React from 'react';
import { useParams } from 'react-router-dom';

const EditBrewCard = () => {
  return (
    <div className='brew-form-container'>
            <h2>Edit Your Brewery</h2>
            <form className="brew-form" autoComplete='off'>
                <label>Brewery Name:</label>
                <input type='text'id="name" name="name"/>

                <label>Image URL:</label>
                <input type='text'id="image" name="image_url"/>

                <label>Location:</label>
                <input type='text'id="location" name="location"/>

                <label>Description:</label>
                <input type='text' id="description" name="description"/>

                <button className='submit-btn' type="submit">UPDATE</button>
            </form>
        </div>
  )
}

export default EditBrewCard