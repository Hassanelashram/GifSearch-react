
const Gif = ({gif}) => {
    return(
        <img src={gif.images.original.url} className="gif" alt=""/>
    )
}

export default Gif;
