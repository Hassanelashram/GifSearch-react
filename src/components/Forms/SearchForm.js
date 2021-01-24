import { useState } from 'react'
import Gifs from '../Gifs/Gifs'

const SearchForm = ({searchFill}) => {
  const API_KEY = 'cNps4G7fsXZSzLuhHt96lhl1oZ7bz6eF'

  const getGifs = (e) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${e.target.value}&api_key=${API_KEY}&limit=6`)
    .then(response => response.json())
    .then((res) => {
        searchFill(res.data)
    })
  }
    return(
    <div class="d-flex">
        <input onChange={getGifs} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </div>
    )
}

export default SearchForm;
