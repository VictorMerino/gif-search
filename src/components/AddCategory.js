import React, { useState } from 'react'

export const AddCategory = ({ addCategory }) => {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = e => {
    setInputValue(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    addCategory(inputValue)
    console.log(inputValue)

    // setCategories([...categories, 'Chumifly'])
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="category"
        id="category"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button>Add category</button>
    </form>
  )
}
