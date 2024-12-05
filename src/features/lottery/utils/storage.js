import { LOTTERY_STORAGE_KEYS } from '../constants/lotteryTypes'

const MAX_HISTORY_LENGTH = 1000
const STORAGE_KEYS = {
  jingshi: 'lottery_history_jingshi',
  tianwen: 'lottery_history_tianwen',
  pingxing: 'lottery_history_pingxing'
}

const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

export const saveDrawResult = (type, items) => {
  try {
    const key = `lottery_history_${type}`
    const history = JSON.parse(localStorage.getItem(key) || '[]')
    
    const newRecord = {
      id: Date.now().toString(),
      timestamp: Date.now(),
      type,
      items,
      hasRare: items.some(item => item.isRare)
    }
    
    // 限制历史记录数量
    if (history.length >= MAX_HISTORY_LENGTH) {
      history.shift()
    }
    
    history.push(newRecord)
    localStorage.setItem(key, JSON.stringify(history))
  } catch (error) {
    console.error('保存抽奖记录失败:', error)
  }
}

export const getDrawHistory = (type) => {
  try {
    const key = STORAGE_KEYS[type]
    if (!key) return []

    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error('读取抽奖记录失败:', error)
    return []
  }
}

export const clearDrawHistory = (type) => {
  try {
    const key = STORAGE_KEYS[type]
    if (!key) return

    localStorage.removeItem(key)
  } catch (error) {
    console.error('清除抽奖记录失败:', error)
    throw new Error('清除抽奖记录失败')
  }
} 