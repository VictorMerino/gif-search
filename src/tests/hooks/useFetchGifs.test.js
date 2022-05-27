import { renderHook } from '@testing-library/react'
import { useFetchGifs } from '../../hooks/useFetchGifs'

describe('useFetchGifs', () => {
  test('returns initial state', () => {
    // const { data, loading } = useFetchGifs('Makoto')
    const { result } = renderHook(() => useFetchGifs('Makoto'))
    const { data, loading } = result.current

    console.log(data, loading)
    expect(data).toEqual([])
    expect(loading).toBe(true)
  })
})
