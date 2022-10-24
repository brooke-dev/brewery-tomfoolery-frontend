import React from 'react';
import BrewsForm from './BrewsForm';

const Home = ({id}) => {
    return (
        <div className='home'>
            <h1>Brewery Tomfoolery</h1>
            <BrewsForm id={id}/>
        </div>

    )
}

export default Home