import { memo } from 'react'
import PropTypes from 'prop-types'

const QuickDrawSettings = memo(({ quickMode, onToggleQuickMode }) => {
  return (
    <div className="quick-draw-settings">
      <label className="quick-mode-toggle">
        <input 
          type="checkbox"
          checked={quickMode}
          onChange={onToggleQuickMode}
        />
        <span className="quick-mode-text">快速模式（跳过动画）</span>
      </label>
    </div>
  )
})

QuickDrawSettings.propTypes = {
  quickMode: PropTypes.bool.isRequired,
  onToggleQuickMode: PropTypes.func.isRequired
}

export default QuickDrawSettings 