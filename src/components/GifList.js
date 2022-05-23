import React from 'react'

const GifList = ({ category }) => {
  const getGifList = async () => {
    try {
      const giphyApiKey = process.env.REACT_APP_GIPHY_API_KEY
      const query = category
      const limit = 10
      const url = `http://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${query}&limit=${limit}`
      const resp = await fetch(url)
      const { data } = await resp.json()

      const gifs = data.map(({ id, title, images }) => {
        return {
          id,
          title,
          image: images?.downsized_medium.url,
        }
      })
      console.log(gifs)

      return url
    } catch (error) {
      // manejo del error
      // console.error(error)
      return error
    }
  }
  getGifList()
  return <div>{category}</div>
}

export default GifList
