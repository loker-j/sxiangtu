import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LotteryPage from './features/lottery/pages/LotteryPage'
import ErrorBoundary from './components/ErrorBoundary'
import announcements from './data/announcements.json'
import './App.css'
import WeChatButton from './components/WeChatButton'
import './styles/WeChatButton.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isAnnouncementOpen, setIsAnnouncementOpen] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
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
              <div className="home-page">
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

                    <a 
                      href="https://ds.163.com/topic/%E4%B8%80%E6%A2%A6%E6%B1%9F%E6%B9%96%E5%9D%90%E8%A7%82%E4%B8%87%E8%B1%A1/?hidemodules=hotfeed%2CtopNav%2CsuspendBall%2CarticleHeadImage%2CsquareNavList%2Cmorefeed&tab=%E8%AE%A8%E8%AE%BA%E5%B9%BF%E5%9C%BA&utm_bothash=H42_bot_90d23268a352444f2aa3f6434e4171d3&utm_term=wyds_dl_jl_ymjh_5bed7397d545682b8bb8b79e"
                      className="lottery-card meditation-card"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3>平行服打坐地点</h3>
                      <p>点击讨论广场，最新发表</p>
                    </a>
                  </div>

                  <button 
                    className="announcement-toggle"
                    onClick={() => setIsAnnouncementOpen(!isAnnouncementOpen)}
                  >
                    {isAnnouncementOpen ? '收起公告' : '展开公告'}
                  </button>
                  
                  <div className={`announcement-content ${isAnnouncementOpen ? 'open' : ''}`}>
                    <ul>
                      {announcements.announcements.map(announcement => (
                        <li key={announcement.id}>
                          {announcement.content}
                          {announcement.link && (
                            <a 
                              href={announcement.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              查看详情
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </main>
              </div>
            } />
            <Route path="/lottery/:type" element={<LotteryPage />} />
          </Routes>
        </div>
        <WeChatButton />
      </Router>
    </ErrorBoundary>
  )
}

export default App

