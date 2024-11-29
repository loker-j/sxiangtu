import { memo } from 'react'
import PropTypes from 'prop-types'

const LotteryActions = memo(({ onSingleDraw, onMultiDraw, isLoading }) => {
  return (
    <div className="lottery-actions">
      <button 
        className="lottery-button"
        onClick={onSingleDraw}
        disabled={isLoading}
      >
        单抽
      </button>
      
      <button 
        className="lottery-button"
        onClick={onMultiDraw}
        disabled={isLoading}
      >
        十连
      </button>
    </div>
  )
})

LotteryActions.propTypes = {
  onSingleDraw: PropTypes.func.isRequired,
  onMultiDraw: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
}

export default LotteryActions 