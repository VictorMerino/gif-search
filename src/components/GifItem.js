import PropTypes from 'prop-types'

const GifItem = ({ item }) => {
  return (
    <div className="animate__animated animate__fadeIn">
      <img src={item.url} alt={item.title} data-testid="img" />
    </div>
  )
}

GifItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default GifItem
