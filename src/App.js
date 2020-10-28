import './App.css';
import SearchForm from './components/Forms/SearchForm'
import Gifs from './components/Gifs/Gifs'
import { useState } from 'react';
function App() {
  const [gifs, setGifs] = useState([])
  const API_KEY = 'cNps4G7fsXZSzLuhHt96lhl1oZ7bz6eF'

  const getGiphs = (e) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${e.target.value}&api_key=${API_KEY}&limit=6`)
    .then(response => response.json())
    .then((res) => {
        setGifs(res.data)
        console.log(res.data)
    })
  }

  return (
      <div className="search-form">
        <SearchForm onSearchFormChange={getGiphs} />
        <Gifs gifs={gifs}/> 
      </div>
  );
}

export default App;
