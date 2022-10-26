import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const EditBrewCard = ({ editFormData, setEditFormData }) => {
  const [updated, setUpdated] = useState(false);

  // path via Link and useParams, sending entry_id of link clicked on as params
  const params = useParams();

  //get specific entry to populate update form
  useEffect(() => {
    fetch(`http://localhost:9292/api/entries/entry-id/${params.id}`)
      .then((res) => res.json())
      .then((entry) => {
         setEditFormData(entry)
      });
  }, [params.id, setEditFormData]);

  //update editFormData w/ new user input to form
  const handleOnChange = (e) => {
    const { name, value } = e.target; 
    setEditFormData(editFormData => {
      return {
        ...editFormData,
        [name]: value 
      };
    })
  }

  //send updated form data to db
 const handleUpdateSubmit = (e) => {
    e.preventDefault();
    
    fetch(`http://localhost:9292/api/entries/entry-id/${params.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editFormData),
      })
      .then(res => res.json())
      .then(updatedEntry => {
        setEditFormData(updatedEntry)
        setUpdated(updated => !updated)
      })
 }

 const editMsgClassName = updated ? '' : 'hidden';
 
  return (
    <div className="content-container">
        <div className='brew-form-container'>
            <h2>Edit Your Brewery</h2>
            <form className="brew-form" autoComplete='off' onSubmit={handleUpdateSubmit}>

                <label>Brewery Name:</label>
                <input type='text'id="name" name="name" value={editFormData.name} onChange={handleOnChange}/>

                <label>Image URL:</label>
                <input type='text'id="image" name="image_url" value={editFormData.image_url} onChange={handleOnChange}/>

                <label>Location:</label>
                <input type='text'id="location" name="location" value={editFormData.location} onChange={handleOnChange}/>

                <label>Description:</label>
                <input type='text' id="description" name="description" value={editFormData.description} onChange={handleOnChange}/>

                <button className='submit-btn' type="submit">UPDATE</button>
                
            </form>

          </div>

            <div id="edit-complete-msg" className={editMsgClassName}>
                <h3>Edit complete!</h3>
                <Link to="/myBrews">
                  <button className='return-to-myBrews'>View My Brews
                  </button>
                </Link>

              </div>

        </div>
  )
}

export default EditBrewCard