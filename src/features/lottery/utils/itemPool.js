import { ITEM_POOLS } from '../constants/itemPools'
import { JINGSHI_PROBABILITY_RANGES } from '../constants/jingshiItems'
import { TIANWEN_PROBABILITY_RANGES } from '../constants/tianwenItems'
import { PINGXING_PROBABILITY_RANGES } from '../constants/pingxingItems'

// 获取对应服务器的物品池配置
export const getItemPoolConfig = (type) => {
  const configs = {
    jingshi: {
      probabilityRanges: JINGSHI_PROBABILITY_RANGES,
      itemPool: ITEM_POOLS.jingshi
    },
    tianwen: {
      probabilityRanges: TIANWEN_PROBABILITY_RANGES,
      itemPool: ITEM_POOLS.tianwen
    },
    pingxing: {
      probabilityRanges: PINGXING_PROBABILITY_RANGES,
      itemPool: ITEM_POOLS.pingxing
    }
  }

  if (!configs[type]) {
    throw new Error(`未知的抽奖类型: ${type}`)
  }

  // 添加调试日志
  console.log('获取物品池配置:', {
    type,
    config: configs[type],
    allConfigs: configs,
    ITEM_POOLS,
    itemPool: ITEM_POOLS[type]
  })

  return configs[type]
}

// 判断是否为稀有物品
export const isRareItem = (item) => {
  return item.isRare || 
    item.probability < 0.01 || // 概率小于1%
    ['PURPLE_GOLD_SCROLL', 'GOLD_EQUIPMENT', 'SPECIAL_SKILL', 'SEAL_SKILL', 'FENGTIAN_JADE']
      .includes(item.category)
} 