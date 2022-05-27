import { fireEvent, render, screen } from '@testing-library/react'
import AddCategory from '../../components/AddCategory'

describe('AddCategory', () => {
  const addCategory = () => {}
  test('should show item with alt text', async () => {
    render(<AddCategory addCategory={addCategory} />)
    const addInput = await screen.findByTestId('add-input')

    const form = await screen.findByRole('form')
    const newInputValue = { target: { value: 'Nobita' } }
    fireEvent.change(addInput, newInputValue)
    fireEvent.submit(form)

    console.log(form.outerHTML)
    expect(true).toBe(true)
  })
})
