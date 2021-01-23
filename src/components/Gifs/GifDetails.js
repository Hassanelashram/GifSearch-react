import { useState, useEffect } from 'react'
const GifDetails = ({match}) => {
    useEffect(() => {
        getGif()
    }, [])

    const [gif, setGif] = useState({
        title: "",
        image: ""
    })
    const API_KEY = 'cNps4G7fsXZSzLuhHt96lhl1oZ7bz6eF'

    const getGif = () => {
        fetch(`https://api.giphy.com/v1/gifs/${match.params.id}?api_key=${API_KEY}`)
        .then(response => response.json())
        .then((res) => {
            setGif({title: res.data.title, image: res.data.images.original.url})
        })
    }
   return(
       <div className="">
        <h1>{gif.title}</h1>
        <img src={gif.image} alt=""/>
       </div>
   )
}

export default GifDetails;
