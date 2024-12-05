import { memo } from 'react'
import PropTypes from 'prop-types'

const ItemDetailPopup = memo(({ item, onClose }) => {
  return (
    <div 
      className="item-detail-popup"
      onClick={(e) => {
        e.stopPropagation()
        onClose()
      }}
    >
      <div 
        className="popup-content"
        onClick={e => e.stopPropagation()}
      >
        <h3>{item.name} x {item.count}</h3>
      </div>
    </div>
  )
})

ItemDetailPopup.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  }).isRequired,
  onClose: PropTypes.func.isRequired
}

export default ItemDetailPopup 