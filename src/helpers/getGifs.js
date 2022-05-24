export const getGifs = async category => {
  try {
    const giphyApiKey = process.env.REACT_APP_GIPHY_API_KEY
    const query = encodeURI(category)
    const limit = 10
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${query}&limit=${limit}`

    const resp = await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map(({ id, title, images }) => {
      return {
        id,
        title,
        url: images?.downsized_medium.url,
      }
    })

    return gifs
  } catch (error) {
    // manejo del error
    // console.error(error)
    return error
  }
}
