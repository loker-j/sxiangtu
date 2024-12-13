import { memo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ItemDetailPopup from './ItemDetailPopup'
import { useOptimizedRender } from '../hooks/useOptimizedRender'
import { getImageUrl } from '../utils/imageUtils'

const LotteryResult = memo(({ items, isSingle, type, quickMode }) => {
  const [selectedItem, setSelectedItem] = useState(null)
  const [renderedItems, setRenderedItems] = useState([])
  const { debouncedRender } = useOptimizedRender(items, type)

  useEffect(() => {
    if (items?.length) {
      if (quickMode) {
        setRenderedItems(items)
      } else {
        debouncedRender(() => setRenderedItems(items))
      }
    }
  }, [items, debouncedRender, quickMode])

  const handleItemClick = (item) => {
    setSelectedItem(item)
  }

  const handleClosePopup = () => {
    setSelectedItem(null)
  }

  if (!renderedItems?.length) {
    return (
      <div className="lottery-result empty">
        <div className="empty-placeholder">
          点击下方按钮开始抽奖
        </div>
      </div>
    )
  }

  return (
    <div 
      className={`lottery-result ${isSingle ? 'single' : 'multi'} ${quickMode ? 'quick-mode' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClosePopup()
        }
      }}
    >
      <div className="lottery-background" />
      {renderedItems.map((item, index) => (
        <div 
          key={`${item.id}-${index}`} 
          className="item-card"
          onClick={(e) => {
            e.stopPropagation()
            handleItemClick(item)
          }}
          title={item.name}
        >
          <img 
            src={getImageUrl(item.name)}
            alt={item.name}
            className="item-image"
            loading={index < 5 ? 'eager' : 'lazy'}
            onError={(e) => {
              if (!e.target.src.endsWith('/default.png')) {
                e.target.src = getImageUrl('default')
                e.target.onerror = null
              }
            }}
          />
          {item.count > 1 && (
            <span className="item-count">{item.count}</span>
          )}
        </div>
      ))}
      
      {selectedItem && (
        <ItemDetailPopup 
          item={selectedItem}
          onClose={handleClosePopup}
        />
      )}
    </div>
  )
})

LotteryResult.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ),
  isSingle: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  quickMode: PropTypes.bool
}

export default LotteryResult 