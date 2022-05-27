import { render, screen } from '@testing-library/react'
import GifItem from '../../components/GifItem'
const item = {
  id: '3o6Mbnll2gudglC3HG',
  title: 'season 3 race GIF',
  url: 'https://media4.giphy.com/media/3o6Mbnll2gudglC3HG/giphy.gif?cid=2cf3b0b63gqcfo8yeddulrdpoihlaj0nzdsq9n2x1ryoftd6&rid=giphy.gif&ct=g',
}
describe('GifItem', () => {
  test('should show item with alt text', () => {
    render(<GifItem item={item} />)
    expect(screen.getByAltText(item.title).outerHTML).toContain(item.id)
  })
})
