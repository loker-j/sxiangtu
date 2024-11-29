import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LotteryPage from './features/lottery/pages/LotteryPage'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>四象图准备中.....</p>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={
              <>
                <header className="header">
                  <h1>四象图模拟器</h1>
                  <h2>氪不改非，垫刀改变命运</h2>
                </header>

                <main className="main-content">
                  <div className="lottery-cards">
                    <Link to="/lottery/jingshi" className="lottery-card">
                      <h3>惊世抽奖</h3>
                      <p>适用于惊世一、一阶段梯度服</p>
                    </Link>
                    
                    <Link to="/lottery/tianwen" className="lottery-card">
                      <h3>天问抽奖</h3>
                      <p>适用于天问一至天问六</p>
                    </Link>
                    
                    <Link to="/lottery/pingxing" className="lottery-card">
                      <h3>平行服抽奖</h3>
                      <p>体验平行服版本抽奖机制</p>
                    </Link>
                  </div>
                </main>
              </>
            } />
            <Route path="/lottery/:type" element={<LotteryPage />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App

