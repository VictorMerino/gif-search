import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import GifList from './components/GifList'

const GifExpertApp = () => {
  // const categories = ['Manga', 'Anime', 'Comedia', 'Acción']
  const [category, setCategory] = useState('Manga')
  const addCategory = newCategory => setCategory(newCategory)
  return (
    <div className="container">
      <h2>GifExpertApp</h2>
      <hr></hr>
      <div className="grid">
        <AddCategory addCategory={addCategory} />

        <h2 style={{ margin: 0, paddingTop: '10px' }}>{category}</h2>
      </div>

      <GifList category={category} />
    </div>
  )
}

export default GifExpertApp
