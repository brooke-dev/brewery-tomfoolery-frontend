import React from 'react';
import { Link } from 'react-router-dom';

const Search = ({search,setSearch}) => {
    return (
        <form className='search'>
            <label>Search:</label>
            <input
            type="text"
            id="search"
            placeholder="Type a name to search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
        </form>

    )
}

export default Search