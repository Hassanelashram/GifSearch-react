import './App.css';
import { useState } from 'react'
import SearchForm from './components/Forms/SearchForm'
import Gifs from './components/Gifs/Gifs'
import GifDetails from './components/Gifs/GifDetails'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  const [gifs, setGifs] = useState([])
  const API_KEY = 'cNps4G7fsXZSzLuhHt96lhl1oZ7bz6eF'

  const handleGifData = (data) => {
    setGifs(data)
    console.log(gifs)
  }

  return (

    <div className="app">
      
      <Router>
      <Navbar searchFill={handleGifData}/>
        <Switch>
          <Route path="/gifs/:id" component={GifDetails} />
            <Gifs gifs={gifs}/> 
        </Switch>
      </Router>
    </div>
      
  );


}

export default App;
