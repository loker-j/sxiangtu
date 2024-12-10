import { memo, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import LotteryHeader from '../components/LotteryHeader'
import LotteryResult from '../components/LotteryResult'
import QuickDrawSettings from '../components/QuickDrawSettings'
import StatsControl from '../components/StatsControl'
import StatsDisplay from '../components/StatsDisplay'
import RareItemNotification from '../components/RareItemNotification'
import { useLottery } from '../hooks/useLottery'
import '../styles/lottery.css'
import '../styles/LotteryResult.css'
import '../styles/loading.css'
import '../styles/header.css'
import '../styles/error.css'
import '../styles/StatsControl.css'
import '../styles/LotteryPage.css'
import '../styles/StatsDisplay.css'
import '../styles/RareItemNotification.css'
import '../styles/QuickDrawSettings.css'

const LotteryPage = memo(() => {
  const { type } = useParams()
  const [showStats, setShowStats] = useState(false)
  const [quickMode, setQuickMode] = useState(false)
  
  const {
    items,
    isLoading,
    isSingle,
    rareItem,
    stats,
    handleSingleDraw,
    handleMultiDraw,
    closeRareNotification,
    resetStats
  } = useLottery(type)

  const handleToggleStats = () => {
    setShowStats(prev => !prev)
  }

  const handleToggleQuickMode = useCallback(() => {
    setQuickMode(prev => !prev)
  }, [])

  return (
    <div className="lottery-page">
      <BackButton />

      <LotteryHeader type={type} />

      <QuickDrawSettings 
        quickMode={quickMode}
        onToggleQuickMode={handleToggleQuickMode}
      />

      <main className="lottery-content">
        <LotteryResult 
          items={items}
          isSingle={isSingle}
          type={type}
          quickMode={quickMode}
        />

        <div className="lottery-controls">
          <StatsControl 
            showStats={showStats}
            onToggleStats={handleToggleStats}
            onResetStats={resetStats}
          />

          {showStats && (
            <StatsDisplay 
              stats={stats}
              type={type}
            />
          )}

          <div className="draw-buttons">
            <button 
              className="draw-button"
              onClick={handleSingleDraw}
              disabled={isLoading}
            >
              单抽
            </button>
            <button 
              className="draw-button"
              onClick={handleMultiDraw}
              disabled={isLoading}
            >
              十连
            </button>
          </div>
        </div>
      </main>

      {rareItem && (
        <RareItemNotification 
          item={rareItem}
          onClose={closeRareNotification}
        />
      )}
    </div>
  )
})

export default LotteryPage 