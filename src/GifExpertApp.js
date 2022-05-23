import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

const GifExpertApp = () => {
  // const categories = ['Manga', 'Anime', 'Comedia', 'Acción']
  const [categories, setCategories] = useState([
    'Manga',
    'Anime',
    'Comedia',
    'Acción',
  ])
  const addCategory = newCategory => setCategories([...categories, newCategory])
  return (
    <>
      <h2>GifExpertApp</h2>
      <hr></hr>
      <ul>
        {categories.map((category, i) => (
          <li key={i}>{category}</li>
        ))}
      </ul>

      <AddCategory addCategory={addCategory} />
    </>
  )
}

export default GifExpertApp
