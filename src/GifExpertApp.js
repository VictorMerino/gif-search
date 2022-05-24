import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import GifList from './components/GifList'

const GifExpertApp = () => {
  const [category, setCategory] = useState('Manga')
  const addCategory = newCategory => setCategory(newCategory)
  return (
    <div className="container">
      <h2>Search a category of gifs:</h2>
      <hr></hr>
      <div className="grid">
        <AddCategory addCategory={addCategory} />

        <h2
          className="animate__animated animate__fadeIn"
          style={{ margin: 0, paddingTop: '10px' }}
        >
          {category}
        </h2>
      </div>

      <GifList category={category} />
    </div>
  )
}

export default GifExpertApp
