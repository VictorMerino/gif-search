import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifList from './components/GifList'

const GifExpertApp = ({ defaultCategory = 'Manga' }) => {
  const [category, setCategory] = useState(defaultCategory)
  const addCategory = newCategory => setCategory(newCategory)
  return (
    <div className="container">
      <h1>Search a category of gifs:</h1>
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
