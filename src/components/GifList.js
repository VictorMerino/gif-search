import React, { useEffect, useState } from 'react'
import GifItem from './GifItem'

const GifList = ({ category }) => {
  const [images, setImages] = useState([])
  useEffect(() => {
    getGifList()
  }, [])
  const getGifList = async () => {
    try {
      const giphyApiKey = process.env.REACT_APP_GIPHY_API_KEY
      const query = category
      const limit = 10
      const url = `http://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${query}&limit=${limit}`

      const resp = await fetch(url)
      const { data } = await resp.json()

      const gifs = data.map(({ id, title, images }) => {
        return {
          id,
          title,
          url: images?.downsized_medium.url,
        }
      })

      setImages(gifs)

      return url
    } catch (error) {
      // manejo del error
      // console.error(error)
      return error
    }
  }
  return (
    <div>
      {category}
      <hr />
      <ul>
        {images.map(image => (
          <GifItem key={image.id} item={image} />
        ))}
      </ul>
      <button onClick={getGifList}>Get gifs</button>
    </div>
  )
}

export default GifList
