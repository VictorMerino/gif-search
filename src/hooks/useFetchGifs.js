import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = category => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  })

  useEffect(() => {
    getGifs(category).then(gifs => {
      setState({ loading: true })
      setTimeout(() => {
        setState({
          data: gifs,
          loading: false,
        })
      }, 200)
    })
  }, [category])

  return state
}
