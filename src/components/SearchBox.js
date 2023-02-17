import React from 'react';

const SearchBox = ({searchChange}) =>{
    return (
    <div >
        <input 
        type='search' 
        placeholder='Search Robots'
        onChange={searchChange}
        className='pa2 black-40'
        />
    </div>
    );
}

export default SearchBox;