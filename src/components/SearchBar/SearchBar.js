import React from 'react';
import "./SearchBar.scss";

function SearchBar() {
    return (
        <div className="search">
            <div className="searchbar">
                <img src="/assets/icons/search.svg" alt="" />
                <input type="text" name="search" id="" />
            </div>
        </div>
    )
}


export default SearchBar
