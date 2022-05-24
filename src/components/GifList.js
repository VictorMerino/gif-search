import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import GifItem from './GifItem'

const GifList = ({ category }) => {
  const [images, setImages] = useState([])
  useEffect(() => {
    console.log(category)
    getGifs(category).then(gifs => setImages(gifs))
  }, [category])

  return (
    <>
      <hr />
      <div className="gifs-grid grid-columns">
        {images.map(image => (
          <GifItem key={image.id} item={image} />
        ))}
      </div>
    </>
  )
}

export default GifList
