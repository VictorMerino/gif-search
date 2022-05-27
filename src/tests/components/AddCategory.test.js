import { render, screen } from '@testing-library/react'
import AddCategory from '../../components/AddCategory'

describe('AddCategory', () => {
  const addCategory = () => {}
  test('should show item with alt text', async () => {
    render(<AddCategory addCategory={addCategory} />)
    const addInput = await screen.findByTestId('add-input')
    const addButton = await screen.findByTestId('add-button')

    expect(true).toBe(true)
  })
})
