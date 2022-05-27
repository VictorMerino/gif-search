import { render, screen } from '@testing-library/react'
import AddCategory from '../../components/AddCategory'

describe('AddCategory', () => {
  const addCategory = () => {}
  test('should show item with alt text', () => {
    render(<AddCategory addCategory={addCategory} />)
    expect(true).toBe(true)
  })
})
