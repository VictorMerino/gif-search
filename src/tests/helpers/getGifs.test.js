import { getGifs } from '../../helpers/getGifs'

describe('getGifs helper', () => {
  test('Should return gifs based on limit variable', async () => {
    const gifs = await getGifs('Akira')
    expect(gifs.length).toBe(12)
  })
  test('Should return no gif if no string is provided', async () => {
    const gifs = await getGifs('')
    expect(gifs.length).toBe(0)
  })
})
