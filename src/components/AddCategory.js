import React, { useState } from 'react'

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = e => {
    setInputValue(e.target.value)
  }
  const handleAddCategory = () => {
    console.log('Handle addCategory')
    // setCategories([...categories, 'Chumifly'])
  }
  return (
    <>
      AddCategory
      <input
        type="text"
        name="category"
        id="category"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAddCategory}>Add category</button>
    </>
  )
}
