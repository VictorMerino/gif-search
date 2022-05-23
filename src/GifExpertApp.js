import React, { useState } from 'react'

const GifExpertApp = () => {
  // const categories = ['Manga', 'Anime', 'Comedia', 'Acción']
  const [categories, setCategories] = useState([
    'Manga',
    'Anime',
    'Comedia',
    'Acción',
  ])
  return (
    <>
      <h2>GifExpertApp</h2>
      <hr></hr>
      <ul>
        {categories.map((category, i) => (
          <li key={i}>{category}</li>
        ))}
      </ul>
    </>
  )
}

export default GifExpertApp
