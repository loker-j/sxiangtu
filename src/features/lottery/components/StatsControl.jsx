import { memo } from 'react'
import PropTypes from 'prop-types'

const StatsControl = memo(({ showStats, onToggleStats, onResetStats }) => {
  const handleReset = () => {
    if (window.confirm('确定要重置所有统计数据吗？')) {
      onResetStats()
    }
  }

  return (
    <div className="stats-control">
      <button 
        className="control-button show-stats-button"
        onClick={onToggleStats}
      >
        {showStats ? '隐藏计数' : '展示计数'}
      </button>
      
      <button 
        className="control-button reset-stats-button"
        onClick={handleReset}
      >
        重置计数
      </button>
    </div>
  )
})

StatsControl.propTypes = {
  showStats: PropTypes.bool.isRequired,
  onToggleStats: PropTypes.func.isRequired,
  onResetStats: PropTypes.func.isRequired
}

export default StatsControl 