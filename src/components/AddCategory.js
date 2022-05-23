import React, { useState } from 'react'

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = e => {
    setInputValue(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log(inputValue)

    // setCategories([...categories, 'Chumifly'])
  }
  return (
    <form onClick={handleSubmit}>
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
