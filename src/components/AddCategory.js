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
        style={{
          padding: '1em',
          'border-top-left-radius': '1em',
          'border-bottom-left-radius': '1em',
          'border-color': '#ececec',
        }}
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        style={{
          padding: '1em',
          'border-top-right-radius': '1em',
          'border-bottom-right-radius': '1em',
          'border-color': '#ececec',
        }}
      >
        Add category
      </button>
    </form>
  )
}

AddCategory.propTypes = {
  addCategory: PropTypes.func.isRequired,
}
