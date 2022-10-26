import React from 'react';
import BrewsForm from './BrewsForm';

const Home = ({id}) => {
    return (
        <div className='home'>
            <div className="home-intro">
                <h1>Brewery Tomfoolery</h1>
                <BrewsForm id={id}/>
            </div>
        </div>

    )
}

export default Home