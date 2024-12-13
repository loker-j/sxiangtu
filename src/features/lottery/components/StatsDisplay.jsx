import { memo } from 'react'
import PropTypes from 'prop-types'

const StatsDisplay = memo(({ stats, type }) => {
  const renderJingshiStats = () => (
    <div className="stats-content">
      <div className="stats-column">
        <div className="stats-item">
          <span>金特技次数：</span>
          <span>{stats.goldSkillCount || 0}</span>
        </div>
        <div className="stats-item">
          <span>紫特技次数：</span>
          <span>{stats.purpleSkillCount || 0}</span>
        </div>
        <div className="stats-item">
          <span>高级秘籍次数：</span>
          <span>{stats.advancedBookCount || 0}</span>
        </div>
      </div>
      <div className="stats-column">
        <div className="stats-item">
          <span>红翡金错次数：</span>
          <span>{stats.redJadeCount || 0}</span>
        </div>
        <div className="stats-item">
          <span>琉璃缀珠次数：</span>
          <span>{stats.glassBeadCount || 0}</span>
        </div>
      </div>
    </div>
  )

  const renderTianwenStats = () => (
    <div className="stats-content">
      <div className="stats-column">
        <div className="stats-item">
          <span>金特技次数：</span>
          <span>{stats.goldSkillCount || 0}</span>
        </div>
        <div className="stats-item">
          <span>紫特技次数：</span>
          <span>{stats.purpleSkillCount || 0}</span>
        </div>
        <div className="stats-item">
          <span>高级秘籍次数：</span>
          <span>{stats.advancedBookCount || 0}</span>
        </div>
        <div className="stats-item">
          <span>梦崽的海螺：</span>
          <span>{stats.mengzaiConchCount || 0}</span>
        </div>
      </div>
      <div className="stats-column">
        <div className="stats-item">
          <span>红翡金错次数：</span>
          <span>{stats.redJadeCount || 0}</span>
        </div>
        <div className="stats-item">
          <span>琉璃缀珠次数：</span>
          <span>{stats.glassBeadCount || 0}</span>
        </div>
        <div className="stats-item">
          <span>篆铭技次数：</span>
          <span>{stats.sealSkillCount || 0}</span>
        </div>
      </div>
    </div>
  )

  const renderPingxingStats = () => (
    <div className="stats-content">
      <div className="stats-column">
        <div className="stats-item">
          <span>金色特技碎片：</span>
          <span>{stats.goldSkillFragmentCount || 0}</span>
        </div>
        <div className="stats-item">
          <span>紫色特技碎片：</span>
          <span>{stats.purpleSkillFragmentCount || 0}</span>
        </div>
        <div className="stats-item">
          <span>紫金秘笈整本：</span>
          <span>{stats.purpleGoldScrollCount || 0}</span>
        </div>
        <div className="stats-item">
          <span>九曲珠：</span>
          <span>{stats.jiuquCount || 0}</span>
        </div>
      </div>
      <div className="stats-column">
        <div className="stats-item">
          <span>照胆镜：</span>
          <span>{stats.mirrorCount || 0}</span>
        </div>
        <div className="stats-item">
          <span>金笸箩：</span>
          <span>{stats.basketCount || 0}</span>
        </div>
        <div className="stats-item">
          <span>游仙枕：</span>
          <span>{stats.pillowCount || 0}</span>
        </div>
        <div className="stats-item">
          <span>照世杯：</span>
          <span>{stats.cupCount || 0}</span>
        </div>
      </div>
    </div>
  )

  return (
    <div className="stats-display">
      <div className="stats-section">
        <div className="stats-item">
          <span>单抽次数：</span>
          <span>{stats.singleDrawCount || 0}</span>
        </div>
        <div className="stats-item">
          <span>十连次数：</span>
          <span>{stats.multiDrawCount || 0}</span>
        </div>
        <div className="stats-item">
          <span>总抽奖次数：</span>
          <span>{stats.totalDrawCount || 0}</span>
        </div>
      </div>
      
      {type === 'jingshi' && renderJingshiStats()}
      {type === 'tianwen' && renderTianwenStats()}
      {type === 'pingxing' && renderPingxingStats()}
    </div>
  )
})

StatsDisplay.propTypes = {
  stats: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['jingshi', 'tianwen', 'pingxing']).isRequired
}

export default StatsDisplay 