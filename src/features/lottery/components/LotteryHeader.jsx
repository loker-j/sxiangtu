import { memo } from 'react'
import PropTypes from 'prop-types'

const LotteryHeader = memo(({ type }) => {
  const getTitle = () => {
    switch (type) {
      case 'jingshi':
        return '惊世抽奖'
      case 'tianwen':
        return '天问抽奖'
      case 'pingxing':
        return '平行服抽奖'
      default:
        return '抽奖'
    }
  }

  const getDescription = () => {
    switch (type) {
      case 'jingshi':
        return '适用于惊世一、一阶段梯度服'
      case 'tianwen':
        return '适用于天问一至天问六'
      case 'pingxing':
        return '体验平行服版本抽奖机制'
      default:
        return ''
    }
  }

  return (
    <header className="lottery-header">
      <h1>{getTitle()}</h1>
      <p>{getDescription()}</p>
    </header>
  )
})

LotteryHeader.propTypes = {
  type: PropTypes.oneOf(['jingshi', 'tianwen', 'pingxing']).isRequired
}

export default LotteryHeader 