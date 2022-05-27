import { useFetchGifs } from '../hooks/useFetchGifs'
import GifItem from './GifItem'
import PropTypes from 'prop-types'

const GifList = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category)

  return (
    <>
      <hr />
      {loading ? (
        <p className="animate__animated animate__flash" data-testid="loading">
          loading
        </p>
      ) : (
        <div className="gifs-grid grid-columns" data-testid="imagesWrapper">
          {images.map(image => (
            <GifItem key={image.id} item={image} />
          ))}
        </div>
      )}
    </>
  )
}

GifList.propTypes = {
  category: PropTypes.string.isRequired,
}

export default GifList
