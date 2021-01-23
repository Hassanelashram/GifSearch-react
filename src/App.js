import './App.css';
import SearchForm from './components/Forms/SearchForm'
import Gifs from './components/Gifs/Gifs'
import GifDetails from './components/Gifs/GifDetails'
import About from './components/Pages/About'
import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
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

    <div className="app">
      
      <Router>
      <Navbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/gifs/:id" component={GifDetails} /> 
          
          <div className="search-form">
            <SearchForm onSearchFormChange={getGiphs} />
            <Gifs gifs={gifs}/> 
          </div>
          
        </Switch>
      </Router>
    </div>
      
  );


}

export default App;
