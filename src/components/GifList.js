import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import GifItem from './GifItem'

const GifList = ({ category }) => {
  const [images, setImages] = useState([])
  useEffect(() => {
    getGifs(category).then(gifs => setImages(gifs))
  }, [])

  return (
    <>
      {category}
      <hr />
      <div className="gifs-grid grid-columns">
        {images.map(image => (
          <GifItem key={image.id} item={image} />
        ))}
        <button onClick={getGifs}>Get gifs</button>
      </div>
    </>
  )
}

export default GifList
