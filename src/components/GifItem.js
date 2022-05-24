const GifItem = ({ item }) => {
  return (
    <div className="animate__animated animate__fadeIn">
      <img src={item.url} alt={item.title} />
    </div>
  )
}

export default GifItem
