import { fireEvent, render, screen } from '@testing-library/react'
import GifList from '../../components/GifList'

/**
 * Counter app should:
 * show default value
 * substract
 * add
 * reset
 */

describe.skip('GifList', () => {
  const defaultValue = 0
  test('should show default value', () => {
    render(<GifList />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('gif')
  })
})
