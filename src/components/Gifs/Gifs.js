import Gif from './Gif.js'
import NotFound from './NotFound'
const Gifs = ({gifs}) => {
    return(
        <div className="gifs">
            {gifs.length === 0 ? <NotFound /> : gifs.map(gif => <Gif key={gif.id} gif={gif}/>)}
        </div>
    )
}

export default Gifs;
