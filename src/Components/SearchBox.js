import React, { useEffect, useState } from 'react'

import './SearchBox.css';
function SearchBox(props) {

    const [searchText, setSearchText] = useState('')

    return (


        <div id='search-box'>
            <input id='search-text' name='q' placeholder='Type movie name ' type='text'
                onChange={(e) => setSearchText(e.target.value)} />
            <button id='search-button' onClick={() => props.getSearchText(searchText)}><span>Search</span></button>

        </div>
    )
}

export default SearchBox