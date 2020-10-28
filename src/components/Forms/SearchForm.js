import { useState } from 'react'
import Gifs from '../Gifs/Gifs'
const SearchForm = ({onSearchFormChange}) => {
    return(
        <div className="container">
            <input placeholder="Search for a gif" type="text" onClick={onSearchFormChange}/>
        </div>
    )
}

export default SearchForm;
