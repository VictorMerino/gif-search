import { fireEvent, render, screen } from '@testing-library/react'
import AddCategory from '../../components/AddCategory'

describe('AddCategory', () => {
  const addCategorySpy = jest.fn()
  beforeEach(() => {
    jest.clearAllMocks()
  })
  test('should show item with alt text', async () => {
    render(<AddCategory addCategory={addCategorySpy} />)
    const addInput = await screen.findByTestId('add-input')

    const form = await screen.findByRole('form')
    const newValue = 'Nobita'
    const newInputValue = { target: { value: newValue } }
    const input = await screen.findByTestId('add-input')
    fireEvent.change(addInput, newInputValue)
    expect(input.value).toBe(newValue)
    fireEvent.submit(form)
    expect(input.value).toBe('')

    expect(addCategorySpy).toHaveBeenCalledTimes(1)
  })

  test('should not send form if input length is less than 2', async () => {
    render(<AddCategory addCategory={addCategorySpy} />)
    const addInput = await screen.findByTestId('add-input')

    const form = await screen.findByRole('form')
    const newInputValue = { target: { value: '' } }
    fireEvent.change(addInput, newInputValue)
    fireEvent.submit(form)

    expect(addCategorySpy).not.toHaveBeenCalled()
  })
})
