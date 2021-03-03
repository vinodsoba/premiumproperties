import React from 'react'
import { useHistory } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import './styles.scss'

const SearchBar = ({ searchQuery, setSearchQuery})  => {     
    const history = useHistory(); 
    const onSubmit = e => {       
        history.push(`/property-search/?=${searchQuery}`)
        e.preventDefault()
        
    };
    return(
        <form action="/property-search" method="get" autoComplete="off" onSubmit={onSubmit} className="search-form">
            <label htmlFor="header-search">
                <span className="visually-hidden">Search Properties</span>
            </label>
            <input
                value={searchQuery}
                onInput={e => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Search by PostCode, Town, City"
                name="Query"
            />
            <button type="submit"><FaIcons.FaSearch /></button>
        </form>
    );   
};

export default SearchBar;