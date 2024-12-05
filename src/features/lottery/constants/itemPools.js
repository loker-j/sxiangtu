// 从各个服务器的配置文件中导入
import { JINGSHI_ITEM_POOL } from './jingshiItems'
import { TIANWEN_ITEM_POOL } from './tianwenItems'
import { PINGXING_ITEM_POOL } from './pingxingItems'

// 统一导出所有物品池配置
export const ITEM_POOLS = {
  jingshi: JINGSHI_ITEM_POOL,
  tianwen: TIANWEN_ITEM_POOL,
  pingxing: PINGXING_ITEM_POOL
} 