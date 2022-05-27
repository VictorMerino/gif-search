import { fireEvent, render, screen } from '@testing-library/react'
import GifList from '../../components/GifList'

import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('GifList', () => {
  const defaultValue = 0
  test('should show loading if loading is true', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    })
    render(<GifList category="Vegeta" />)
    const loadingElement = screen.getByTestId('loading')
    expect(loadingElement).toHaveClass('animate__flash')
  })
  test.only('should show a list of gifs based on a category', () => {
    const data = [
      {
        id: 'id1',
        url: 'http://url.url',
        title: 'Title 1',
      },
      {
        id: 'id2',
        url: 'http://url2.url',
        title: 'Title 2',
      },
    ]
    useFetchGifs.mockReturnValue({
      data,
      loading: false,
    })
    render(<GifList category="Vegeta" />)
    const imagesWrapper = screen.getByTestId('imagesWrapper')

    expect(imagesWrapper.outerHTML).toContain(data[1].url)
  })
})
