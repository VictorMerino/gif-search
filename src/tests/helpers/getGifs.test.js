import { getGifs } from '../../helpers/getGifs'

describe('getGifs helper', () => {
  test('Should return gifs', async () => {
    const gifs = await getGifs('Akira')
    expect(gifs.length).toBe(12)
  })
})
