import { memo } from 'react'

const LotteryCard = memo(({ title, description, onClick }) => (
  <button className="lottery-card" onClick={onClick}>
    <h3>{title}</h3>
    <p>{description}</p>
  </button>
))

export default LotteryCard 