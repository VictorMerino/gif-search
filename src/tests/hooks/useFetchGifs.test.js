import { renderHook } from '@testing-library/react'
import { useFetchGifs } from '../../hooks/useFetchGifs'

describe('useFetchGifs', () => {
  test('returns initial state', async () => {
    // const { data, loading } = useFetchGifs('Makoto')
    const { result /* waitForNextUpdate */ } = renderHook(() =>
      useFetchGifs('Makoto')
    )
    const { data, loading } = result.current

    // await waitForNextUpdate()
    console.log(data, loading)
    expect(data).toEqual([])
    expect(loading).toBe(true)
  })

  test.skip('returns images array and not loading', async () => {
    // const { data, loading } = useFetchGifs('Makoto')
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Makoto')
    )
    const { data, loading } = result.current
    await waitForNextUpdate()

    console.log(data, loading)
    expect(data).toEqual([])
    expect(loading).toBe(true)
  })
})
