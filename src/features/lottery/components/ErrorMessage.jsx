import { memo } from 'react'
import PropTypes from 'prop-types'

const ErrorMessage = memo(({ message, onRetry }) => {
  return (
    <div className="error-message">
      <div className="error-content">
        <p>{message || '操作出现错误，请重试'}</p>
        {onRetry && (
          <button 
            className="retry-button"
            onClick={onRetry}
          >
            重试
          </button>
        )}
      </div>
    </div>
  )
})

ErrorMessage.propTypes = {
  message: PropTypes.string,
  onRetry: PropTypes.func
}

export default ErrorMessage 