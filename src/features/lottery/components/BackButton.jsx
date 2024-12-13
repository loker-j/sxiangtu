import { memo } from 'react'
import { Link } from 'react-router-dom'

const BackButton = memo(() => {
  return (
    <Link to="/" className="back-button">
      <span className="back-arrow">←</span>
      返回主页
    </Link>
  )
})

export default BackButton 