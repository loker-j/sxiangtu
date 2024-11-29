import { memo } from 'react'
import PropTypes from 'prop-types'

const RareItemNotification = memo(({ item, onClose }) => {
  return (
    <div className="rare-item-notification">
      <div className="notification-content">
        <h3>恭喜抽中稀有物品</h3>
        <p>{item.name} x {item.count}</p>
        <button onClick={onClose}>确定</button>
      </div>
    </div>
  )
})

RareItemNotification.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  }).isRequired,
  onClose: PropTypes.func.isRequired
}

export default RareItemNotification 