import { memo } from 'react'

const LoadingSpinner = memo(() => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>四象图准备中.....</p>
    </div>
  )
})

export default LoadingSpinner 