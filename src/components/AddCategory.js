import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ addCategory }) => {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = e => {
    setInputValue(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()

    addCategory(inputValue)
    setInputValue('')
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

AddCategory.propTypes = {
  addCategory: PropTypes.func.isRequired,
}
