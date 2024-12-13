// 添加导入语句
import { ITEM_POOLS } from '../constants/itemPools'

// 生成随机数
const generateRandom = () => Math.random()

// 根据概率区间确定物品类别
const determineItemCategory = (random, probabilityRanges) => {
  let accumulatedProbability = 0
  
  for (const [category, probability] of Object.entries(probabilityRanges)) {
    accumulatedProbability += probability
    if (random <= accumulatedProbability) {
      return category
    }
  }
  
  return Object.keys(probabilityRanges)[0] // 默认返回第一个类别
}

// 从类别中随机选择具体物品
const selectItemFromCategory = (category, itemPool) => {
  const items = itemPool[category];
  if (!items || items.length === 0) {
    console.error(`空物品池: 类别=${category}`);
    return null;
  }

  // 检查物品属性完整性
  items.forEach((item, index) => {
    if (!item.id || !item.name || !item.probability) {
      console.error(`物品属性不完整:`, {
        category,
        index,
        item,
        missingProps: {
          id: !item.id,
          name: !item.name,
          probability: !item.probability
        }
      });
    }
  });

  const random = generateRandom();
  let accumulatedProbability = 0;

  for (const item of items) {
    accumulatedProbability += item.probability;
    if (random <= accumulatedProbability) {
      return item;
    }
  }

  return items[0];
}

const determineSpecialSkillType = (random) => {
  // 金特技 30% 概率
  if (random < 0.1) {
    return 'GOLD_SPECIAL_SKILL'
  }
  // 紫特技 70% 概率
  return 'PURPLE_SPECIAL_SKILL'
}

const selectSpecialSkill = (type, specialSkillPool) => {
  const skills = specialSkillPool[type]
  const index = Math.floor(Math.random() * skills.length)
  return {
    ...skills[index],
    skillType: type,
    category: 'SPECIAL_SKILL'
  }
}

const validateItemProbabilities = (items) => {
  const sum = items.reduce((acc, item) => acc + item.probability, 0);
  if (Math.abs(sum - 1) > 0.0001) {
    console.warn(`物品概率总和不为1: ${sum}`);
    return false;
  }
  return true;
}

// 判定是掉落4个还是1个碎片
const determineScrollFragmentType = (random) => {
  // 固定掉落4个碎片和1个碎片的概率各50%
  if (random < 0.5) {
    return 'FOUR_FRAGMENT'
  }
  return 'ONE_FRAGMENT'
}

// 判定白绿蓝秘笈的掉落数量
const determineScrollType = (random) => {
  // 根据概率分布确定掉落数量
  if (random < 0.4) {        // 40%概率掉落4个
    return 'FOUR_SCROLL'
  } else if (random < 0.7) { // 30%概率掉落2个
    return 'TWO_SCROLL'
  }
  return 'ONE_SCROLL'        // 30%概率掉落1个
}

const MULTI_LEVEL_CATEGORIES = {
  PURPLE_GOLD_SCROLL_FRAGMENT: {
    determineType: determineScrollFragmentType,
    getPoolKey: (type) => {
      switch(type) {
        case 'FOUR_FRAGMENT':
          return 'PURPLE_GOLD_SCROLL_FRAGMENT_4'
        case 'ONE_FRAGMENT':
          return 'PURPLE_GOLD_SCROLL_FRAGMENT_1'
        default:
          return 'PURPLE_GOLD_SCROLL_FRAGMENT_4'
      }
    }
  },
  WHITE_GREEN_BLUE_SCROLL: {
    determineType: determineScrollType,
    getPoolKey: (type) => {
      switch(type) {
        case 'FOUR_SCROLL':
          return 'WHITE_GREEN_BLUE_SCROLL_4'
        case 'TWO_SCROLL':
          return 'WHITE_GREEN_BLUE_SCROLL_2'
        case 'ONE_SCROLL':
          return 'WHITE_GREEN_BLUE_SCROLL_1'
        default:
          return 'WHITE_GREEN_BLUE_SCROLL_4'
      }
    }
  },
  SPECIAL_SKILL: {
    determineType: determineSpecialSkillType,
    getPoolKey: (type) => type // 直接返回类型作为键
  }
}

// 验证物品池数据结构
const validateItemPool = (itemPool) => {
  // 1. 验证必需的类别
  const requiredCategories = [
    // 通用必需类别
    'PURPLE_GOLD_SCROLL_FRAGMENT',
    'SPECIAL_SKILL',
    'GOLD_MATERIAL',
    'BLUE_SCROLL',
    'REFINE_MATERIAL',
    'CURRENCY',
    'RARE_GOLD',
    'PURPLE_GOLD_BOOK',
    
    // 天问服特有类别
    'GOLD_EQUIPMENT_MATERIAL',
    'WHITE_GREEN_BLUE_SCROLL',
    'GOLD_EQUIPMENT',
    'SILVER_BOX',
    'SILVER_BAG',
    'COPPER_BAG',
    'GUILD_BOX',
    'NANKE_STONE',
    'HAOPO_STONE',
    'FENGTIAN_JADE',
    'SEAL_SKILL',
    'YIZHAOZHIJIAN',
    'MENGZAI_CONCH',

    // 平行服特有类别
    'SPECIAL_ITEM'  // 九曲珠等特殊道具
  ]

  // 根据服务器类型过滤需类别
  const filterRequiredCategories = (type) => {
    switch(type) {
      case 'jingshi':
        return requiredCategories.filter(category => 
          !['HAOPO_STONE', 'FENGTIAN_JADE', 'SEAL_SKILL', 'SPECIAL_ITEM', 
            'YIZHAOZHIJIAN', 'MENGZAI_CONCH'].includes(category)
        )
      case 'tianwen':
        return requiredCategories.filter(category => 
          !['SPECIAL_ITEM'].includes(category)
        )
      case 'pingxing':
        return requiredCategories.filter(category => 
          !['HAOPO_STONE', 'FENGTIAN_JADE', 'SEAL_SKILL',
            'YIZHAOZHIJIAN', 'MENGZAI_CONCH'].includes(category)
        )
      default:
        return requiredCategories
    }
  }
  
  const serverType = determineServerType(itemPool)
  const categories = filterRequiredCategories(serverType)
  
  for (const category of categories) {
    if (!itemPool[category]) {
      console.error(`缺少必需的物品类别: ${category}`)
      return false
    }
  }

  // 2. 验证多级判定类别的数据结构
  for (const [category, config] of Object.entries(MULTI_LEVEL_CATEGORIES)) {
    const categoryPool = itemPool[category]
    if (!categoryPool) continue

    // 验证子类别是否存在
    const subTypes = Object.keys(categoryPool)
    if (subTypes.length === 0) {
      console.error(`${category} 缺少子类别物品池`)
      return false
    }

    // 验证每个子类别的物品
    for (const subType of subTypes) {
      const items = categoryPool[subType]
      if (!Array.isArray(items) || items.length === 0) {
        console.error(`${category}.${subType} 物品池格式错误或为空`)
        return false
      }

      // 验证物品属性
      for (const item of items) {
        if (!item.id || !item.name || !item.fixedCount) {
          console.error(`${category}.${subType} 中存在物品属性不完整`, item)
          return false
        }
      }
    }
  }

  // 3. 验证普通类别的概率总和
  for (const category of Object.keys(itemPool)) {
    if (MULTI_LEVEL_CATEGORIES[category]) continue
    
    const items = itemPool[category]
    if (!Array.isArray(items)) continue

    const probabilitySum = items.reduce((sum, item) => sum + (item.probability || 0), 0)
    if (Math.abs(probabilitySum - 1) > 0.0001) {
      console.error(`${category} 物品概率总和不为1: ${probabilitySum}`)
      return false
    }
  }

  return true
}

// 根据物品池特征判断服务器类型
const determineServerType = (itemPool) => {
  if (itemPool.HAOPO_STONE) return 'tianwen'
  if (itemPool.SPECIAL_ITEM) return 'pingxing'
  return 'jingshi'
}

const CATEGORY_MAPPING = {
  'PURPLE_GOLD_SCROLL_FRAGMENT': 'PURPLE_GOLD_SCROLL_FRAGMENT_1',
  'WHITE_GREEN_BLUE_SCROLL': 'WHITE_GREEN_BLUE_SCROLL_4'
}

// 根据概率区间生成随机物品
export const performSingleDraw = (probabilityRanges, itemPool) => {
  const random = Math.random()
  let accumulatedProbability = 0
  
  // 打印当前使用的物品池信息
  console.log('当前物品池配置:', {
    availableCategories: Object.keys(itemPool),
    probabilityRanges
  });
  
  for (const [category, probability] of Object.entries(probabilityRanges)) {
    accumulatedProbability += probability
    if (random <= accumulatedProbability) {
      try {
        // 处理多级类别
        if (MULTI_LEVEL_CATEGORIES[category]) {
          const config = MULTI_LEVEL_CATEGORIES[category]
          const type = config.determineType(Math.random())
          const poolKey = config.getPoolKey(type)
          
          // 特技需要特殊处理
          if (category === 'SPECIAL_SKILL') {
            const skillPool = itemPool[category] // 获取特技物品池
            if (!skillPool || typeof skillPool !== 'object') {
              console.error(`特技物品池无效:`, {
                category,
                skillPool
              });
              return {
                error: true,
                message: `特技物品池无效`,
                category
              }
            }

            const skillItems = skillPool[type]
            if (!Array.isArray(skillItems) || skillItems.length === 0) {
              console.error(`特技类型物品池无效:`, {
                category,
                type,
                availableTypes: Object.keys(skillPool),
                skillItems
              });
              return {
                error: true,
                message: `特技类型物品池无效: ${type}`,
                category,
                type
              }
            }

            // 随机选择特技
            const itemIndex = Math.floor(Math.random() * skillItems.length)
            const selectedSkill = skillItems[itemIndex]
            
            console.log(`选中的特技:`, {
              type,
              selectedSkill
            });

            return {
              ...selectedSkill,
              category,
              skillType: type
            }
          }

          // 处理其他多级类别
          const items = itemPool[poolKey]
          if (!Array.isArray(items) || items.length === 0) {
            console.error(`物品池错误:`, {
              category,
              type,
              poolKey,
              availablePools: Object.keys(itemPool),
              items
            });
            return {
              error: true,
              message: `物品池配置错误: ${category}.${type}`,
              category,
              poolKey
            }
          }

          const itemIndex = Math.floor(Math.random() * items.length)
          const baseItem = items[itemIndex]
          const count = type.includes('FOUR') ? 4 : 
                        type.includes('TWO') ? 2 : 1

          console.log(`选中的物品:`, {
            category,
            type,
            baseItem,
            count
          });

          return {
            ...baseItem,
            category,
            count
          }
        } else {
          // 处理普通类别
          const mappedCategory = CATEGORY_MAPPING[category] || category
          const items = itemPool[mappedCategory]
          
          if (!items || !Array.isArray(items)) {
            console.error(`物品池错误:`, {
              category,
              mappedCategory,
              availablePools: Object.keys(itemPool),
              items
            });
            return {
              error: true,
              message: `物品池配置错误: ${category}`,
              category,
              mappedCategory
            }
          }

          // 按概率选择物品
          const itemRandom = Math.random()
          let itemAccumulatedProbability = 0
          
          // 检查物品池中的物品
          console.log(`物品池检查:`, {
            category,
            itemCount: items.length,
            items: items.map(item => ({
              id: item.id,
              name: item.name,
              probability: item.probability
            }))
          });
          
          for (const item of items) {
            itemAccumulatedProbability += (item.probability || 0)
            if (itemRandom <= itemAccumulatedProbability) {
              return {
                ...item,
                category
              }
            }
          }

          // 如果没有按概率选中物品，返回该类别的第一个物品
          return {
            ...items[0],
            category
          }
        }
      } catch (error) {
        console.error('抽奖系统错误:', {
          error,
          category,
          stack: error.stack,
          itemPool: Object.keys(itemPool)
        });
        return {
          error: true,
          message: error.message,
          category,
          stack: error.stack
        }
      }
    }
  }
  
  console.error('概率计算错误:', {
    totalProbability: accumulatedProbability,
    ranges: probabilityRanges
  });
  return {
    error: true,
    message: '概率计算错误',
    totalProbability: accumulatedProbability
  }
}

// 执行十连抽
export const performMultiDraw = (probabilityRanges, itemPool) => {
  const results = []
  const errors = []
  
  for (let i = 0; i < 10; i++) {
    const result = performSingleDraw(probabilityRanges, itemPool)
    if (result && result.error) {
      errors.push(result)
    } else if (result) {
      results.push(result)
    }
  }

  // 如果出现错误，返回错误信息
  if (errors.length > 0) {
    console.error('抽奖过程中发现错误:', errors)
    return {
      error: true,
      message: '抽奖配置异常',
      errors,
      results
    }
  }

  return results
}

const validateProbabilityRanges = (ranges) => {
  const sum = Object.values(ranges).reduce((acc, val) => acc + val, 0);
  if (Math.abs(sum - 1) > 0.0001) {
    console.warn(`概率总和不为1: ${sum}`);
  }
} 