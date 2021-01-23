import { Link } from "react-router-dom"
const Gif = ({gif}) => {
    const showHeart = (e) => {
        e.target.children[0].style.display = "inline-block"
    }
    const hideHeart = (e) => {
        e.target.children[0].style.display = "none"
    }
    return(
        // <img src={gif.images.original.url} className="gif" alt=""/>
        
        <div  className="card">
            <div onMouseEnter={showHeart} onMouseLeave={hideHeart} style={{backgroundImage: "url(" + gif.images.original.url + ")"}} className="card-top">
                <i class="far fa-heart"></i>
                {/* <i class="far fa-heart"></i> */}
            </div>
            <div className="card-footer">
                
                    <h4>
                    <Link to={`/gifs/${gif.id}`}>
                        {gif.title}
                    </Link>
                    </h4>
                
            </div>
        </div>
    )
}

export default Gif;
