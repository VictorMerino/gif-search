import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import GifList from './components/GifList'

const GifExpertApp = () => {
  // const categories = ['Manga', 'Anime', 'Comedia', 'Acción']
  const [categories, setCategories] = useState(['Manga'])
  const addCategory = newCategory => setCategories([...categories, newCategory])
  return (
    <>
      <h2>GifExpertApp</h2>
      <hr></hr>

      {categories.map((category, i) => (
        <GifList key={'Cat' + i} category={category} />
      ))}

      <AddCategory addCategory={addCategory} />
    </>
  )
}

export default GifExpertApp
