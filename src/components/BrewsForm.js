import React, { useState } from 'react';

const initialState={
    name: "",
    image_url: "",
    location: "",
    description: "",
}
const BrewsForm = () => {
    //set state
    const[formData, setFormData] = useState(initialState);
    //destructuring form data
    // const { name, image_url, location, description} = formData;

    //handle user input into each form field and set state based on input
    const handleOnChange = (e) => {
        const { name, value } = e.target; 
        //update form state w/ new values entered into the input fields
        //make a copy of formData w/ spread, add on the ([name]: value) entered
        setFormData(formData => {
          return {
            ...formData,
            [name]: value //get the value of the name attribute for whatever input we are in with [name] (will owrk for name, image, and description)
          };
        })
      }
      //POST REQUEST to submit new brewery
    const handleBrewSubmit = (e) => {
        e.preventDefault();
        // console.log(formData)
        // console.log(JSON.stringify(formData))
        fetch("http://localhost:9292/api/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then((res) => res.json())
        .then(
            //reset form state
            setFormData(initialState)
            //Will NEED TO ADD TO BREW LIST in front-end AND UPDATE THAT STATE & re-fetch GET from db w/ updated brew list
        )
        .catch(err => console.error(err))
    }

      

    return (
        <div className='brew-form-container'>
            <h1>Add a new Brewery</h1>
            <form className="brew-form" autoComplete='off' onSubmit={handleBrewSubmit}>
                <label>Brewery Name:</label>
                <input type='text'id="name" name="name" value={formData.name} onChange={handleOnChange}/>

                <label>Image URL:</label>
                <input type='text'id="image" name="image_url" value={formData.image_url} onChange={handleOnChange}/>

                <label>Location:</label>
                <input type='text'id="location" name="location" value={formData.location} onChange={handleOnChange}/>

                <label>Description:</label>
                <input type='text' id="description" name="description" value={formData.description} onChange={handleOnChange}/>

                <button className='submit-btn' type="submit">ADD BREWERY</button>
            </form>
        </div>

    )
}

export default BrewsForm
