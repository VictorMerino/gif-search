import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ addCategory }) => {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = e => {
    setInputValue(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log('submit called')

    addCategory(inputValue)
    setInputValue('')
  }
  return (
    <form aria-label="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="category"
        id="category"
        data-testid="add-input"
        style={{
          padding: '1em',
          borderTopLeftRadius: '1em',
          borderBottomLeftRadius: '1em',
          borderColor: '#ececec',
        }}
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        data-testid="add-button"
        style={{
          padding: '1em',
          borderTopRightRadius: '1em',
          borderBottomRightRadius: '1em',
          borderColor: '#ececec',
        }}
      >
        Search
      </button>
    </form>
  )
}

AddCategory.propTypes = {
  addCategory: PropTypes.func.isRequired,
}

export default AddCategory
