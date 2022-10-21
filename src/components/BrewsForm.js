import React from 'react';

const BrewsForm = () => {
    return (
        <div className='brew-form-container'>
            <h1>BrewsForm</h1>
            <form className="brew-form">
                <label>Name</label>
                <input 
                    type='text'
                    placeholder='Name'
                />
                <button className='submit-btn' type="submit">SUBMIT</button>
            </form>
        </div>

    )
}

export default BrewsForm
