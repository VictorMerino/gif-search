import { fireEvent, render, screen } from '@testing-library/react'
import GifExpertApp from '../GifExpertApp'

describe('GifExpertApp', () => {
  test('should show correct heading', () => {
    render(<GifExpertApp />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('gif')
  })

  test('should always show a GifList component, as there is a default param', async () => {
    render(<GifExpertApp />)
    const imagesWrapper = await screen.findByTestId('imagesWrapper')
    expect(imagesWrapper.outerHTML).toContain('animate__fadeIn')
  })
})
