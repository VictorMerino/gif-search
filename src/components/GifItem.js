const GifItem = ({ item }) => {
  return (
    <>
      <img src={item.url} alt={item.title} />
    </>
  )
}

export default GifItem
