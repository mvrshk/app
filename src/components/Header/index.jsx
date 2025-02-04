import React from 'react';
import SearchBar from '../SearchBar';

const Header = ({schools, onSearchChange}) => {
    return (
        <header>
        <div class="header-block">
            <div class="header-text">
                <h1>Harry Potter</h1>
                <h2>View all characters from the Harry Potter universe</h2>
            </div>
            <SearchBar schools={schools} onSearchChange={onSearchChange}/>
        </div>
        </header>
    );
}

export default Header;

