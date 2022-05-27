import { fireEvent, render, screen } from '@testing-library/react'
import GifExpertApp from '../GifExpertApp'

/**
 * Counter app should:
 * show default value
 * substract
 * add
 * reset
 */

describe('GifExpertApp', () => {
  const defaultValue = 0
  test('should show default value', () => {
    render(<GifExpertApp />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('gif')
  })
})
