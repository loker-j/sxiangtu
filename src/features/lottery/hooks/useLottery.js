import { useState, useCallback, useEffect } from 'react'
import { performSingleDraw, performMultiDraw } from '../utils/probability'
import { saveDrawResult } from '../utils/storage'
import { getItemPoolConfig, isRareItem } from '../utils/itemPool'

export const useLottery = (type) => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSingle, setIsSingle] = useState(true)
  const [rareItem, setRareItem] = useState(null)

  const getInitialStats = () => {
    const baseStats = {
      singleDrawCount: 0,
      multiDrawCount: 0,
      totalDrawCount: 0,
    }

    switch (type) {
      case 'pingxing':
        return {
          ...baseStats,
          goldSkillFragmentCount: 0,  // 开物金色特技碎片
          purpleSkillFragmentCount: 0, // 开物紫色特技碎片
          purpleGoldScrollCount: 0,    // 紫色金色秘笈整本
          jiuquCount: 0,               // 九曲珠
          mirrorCount: 0,              // 照胆镜
          basketCount: 0,              // 金笸箩
          pillowCount: 0,              // 游仙枕
          cupCount: 0                  // 照世杯
        }
      case 'tianwen':
        return {
          ...baseStats,
          goldSkillCount: 0,
          purpleSkillCount: 0,
          advancedBookCount: 0,
          sealSkillCount: 0,
          redJadeCount: 0,
          glassBeadCount: 0,
          mengzaiConchCount: 0  // 添加梦崽的海螺计数
        }
      case 'jingshi':
      default:
        return {
          ...baseStats,
          goldSkillCount: 0,
          purpleSkillCount: 0,
          advancedBookCount: 0,
          redJadeCount: 0,
          glassBeadCount: 0
        }
    }
  }

  const [stats, setStats] = useState(getInitialStats())

  const { probabilityRanges, itemPool } = getItemPoolConfig(type)

  const updateStats = useCallback((newItems, isSingleDraw) => {
    setStats(prev => {
      const newStats = {
        ...prev,
        singleDrawCount: prev.singleDrawCount + (isSingleDraw ? 1 : 0),
        multiDrawCount: prev.multiDrawCount + (isSingleDraw ? 0 : 1),
        totalDrawCount: prev.totalDrawCount + (isSingleDraw ? 1 : 10)
      }

      // 根据服务器类型创建不同的临时计数对象
      const tempCounts = type === 'pingxing' ? {
        goldSkillFragmentCount: 0,
        purpleSkillFragmentCount: 0,
        purpleGoldScrollCount: 0,
        jiuquCount: 0,
        mirrorCount: 0,
        basketCount: 0,
        pillowCount: 0,
        cupCount: 0
      } : {
        goldSkillCount: 0,
        purpleSkillCount: 0,
        advancedBookCount: 0,
        sealSkillCount: 0,
        redJadeCount: 0,
        glassBeadCount: 0,
        mengzaiConchCount: 0  // 添加梦崽的海螺临时计数
      }

      // 更新物品统计
      newItems.forEach(item => {
        if (type === 'pingxing') {
          // 平行服统计逻辑
          if (item.id === 'kaiwu_gold') {
            tempCounts.goldSkillFragmentCount += item.count
          }
          if (item.id === 'kaiwu_purple') {
            tempCounts.purpleSkillFragmentCount += item.count
          }
          if (item.isRare && item.category === 'PURPLE_GOLD_SCROLL') {
            tempCounts.purpleGoldScrollCount += item.count
          }
          switch (item.id) {
            case 'jiuquzhu':
              tempCounts.jiuquCount += item.count
              break
            case 'zhaodanjing':
              tempCounts.mirrorCount += item.count
              break
            case 'jinbiluo':
              tempCounts.basketCount += item.count
              break
            case 'youxianzhen':
              tempCounts.pillowCount += item.count
              break
            case 'zhaoshibei':
              tempCounts.cupCount += item.count
              break
          }
        } else {
          // 惊世服和天问服统计逻辑
          switch (item.category) {
            case 'SPECIAL_SKILL':
              if (item.skillType === 'GOLD_SPECIAL_SKILL') {
                tempCounts.goldSkillCount += 1
              } else if (item.skillType === 'PURPLE_SPECIAL_SKILL') {
                tempCounts.purpleSkillCount += 1
              }
              break
            case 'PURPLE_GOLD_SCROLL':
              tempCounts.advancedBookCount += 1
              break
            case 'SEAL_SKILL':
              if (type === 'tianwen') {
                tempCounts.sealSkillCount += 1
              }
              break
            case 'GOLD_EQUIPMENT_MATERIAL':
              if (item.name === '红翡金错') {
                tempCounts.redJadeCount += (item.count || 1)
              } else if (item.name === '琉璃缀珠') {
                tempCounts.glassBeadCount += (item.count || 1)
              }
              break
            case 'MENGZAI_CONCH':  // 添加梦崽的海螺统计逻辑
              if (type === 'tianwen') {
                tempCounts.mengzaiConchCount += (item.count || 1)
              }
              break
          }
        }
      })

      // 合并临时计数到新统计
      return {
        ...newStats,
        ...(type === 'pingxing' ? {
          goldSkillFragmentCount: prev.goldSkillFragmentCount + tempCounts.goldSkillFragmentCount,
          purpleSkillFragmentCount: prev.purpleSkillFragmentCount + tempCounts.purpleSkillFragmentCount,
          purpleGoldScrollCount: prev.purpleGoldScrollCount + tempCounts.purpleGoldScrollCount,
          jiuquCount: prev.jiuquCount + tempCounts.jiuquCount,
          mirrorCount: prev.mirrorCount + tempCounts.mirrorCount,
          basketCount: prev.basketCount + tempCounts.basketCount,
          pillowCount: prev.pillowCount + tempCounts.pillowCount,
          cupCount: prev.cupCount + tempCounts.cupCount
        } : {
          goldSkillCount: prev.goldSkillCount + tempCounts.goldSkillCount,
          purpleSkillCount: prev.purpleSkillCount + tempCounts.purpleSkillCount,
          advancedBookCount: prev.advancedBookCount + tempCounts.advancedBookCount,
          ...(type === 'tianwen' ? {
            sealSkillCount: prev.sealSkillCount + tempCounts.sealSkillCount,
            mengzaiConchCount: prev.mengzaiConchCount + tempCounts.mengzaiConchCount,  // 添加梦崽的海螺统计更新
          } : {}),
          redJadeCount: prev.redJadeCount + tempCounts.redJadeCount,
          glassBeadCount: prev.glassBeadCount + tempCounts.glassBeadCount
        })
      }
    })
  }, [type])

  const checkRareItems = useCallback((newItems) => {
    console.log('检查稀有物品:', newItems)
    const rare = newItems.find(item => {
      const isRare = isRareItem(item)
      console.log('物品:', item.name, '是否稀有:', isRare, '属性:', item)
      return isRare
    })
    if (rare) {
      setRareItem(rare)
    }
  }, [])

  const handleSingleDraw = useCallback(async () => {
    setIsLoading(true)
    setIsSingle(true)
    
    try {
      const result = performSingleDraw(probabilityRanges, itemPool)
      const newItems = [result]
      
      console.log('抽奖结果:', newItems)
      setItems(newItems)
      updateStats(newItems, true)
      checkRareItems(newItems)
      saveDrawResult(type, newItems)
    } catch (error) {
      console.error('抽奖失败:', error)
    } finally {
      setIsLoading(false)
    }
  }, [type, probabilityRanges, itemPool, updateStats, checkRareItems])

  const handleMultiDraw = useCallback(async () => {
    setIsLoading(true)
    setIsSingle(false)
    
    try {
      const results = performMultiDraw(probabilityRanges, itemPool)
      setItems(results)
      updateStats(results, false)
      checkRareItems(results)
      saveDrawResult(type, results)
    } catch (error) {
      console.error('抽奖失败:', error)
    } finally {
      setIsLoading(false)
    }
  }, [type, probabilityRanges, itemPool, updateStats, checkRareItems])

  const closeRareNotification = useCallback(() => {
    setRareItem(null)
  }, [])

  const resetStats = useCallback(() => {
    setStats(getInitialStats())
  }, [])

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      import('../utils/debug.js').then(({ generateImageReport }) => {
        const allItems = Object.values(itemPool).flat()
        generateImageReport(allItems).then(report => {
          if (report.missingImages.length > 0) {
            console.warn('需要添加以下图片文件:', report.missingImages)
          }
          if (report.wrongTypeImages.length > 0) {
            console.warn('以下文件格式错误:', report.wrongTypeImages)
          }
        })
      })
    }
  }, [itemPool])

  return {
    items,
    isLoading,
    isSingle,
    rareItem,
    stats,
    handleSingleDraw,
    handleMultiDraw,
    closeRareNotification,
    resetStats
  }
} 