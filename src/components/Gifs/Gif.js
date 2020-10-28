
const Gif = ({gif}) => {
    return(
        // <img src={gif.images.original.url} className="gif" alt=""/>
        
        <div className="card">
            <div style={{backgroundImage: "url(" + gif.images.original.url + ")"}} className="card-top">
                Add to fav
            </div>
            <div className="card-footer">
                <h4><a href={gif.source}>{gif.title}</a></h4>
            </div>
        </div>
    )
}

export default Gif;
