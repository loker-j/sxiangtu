export const ITEM_CATEGORIES = {
  PURPLE_GOLD_SCROLL_FRAGMENT: 'PURPLE_GOLD_SCROLL_FRAGMENT',
  SPECIAL_SKILL: 'SPECIAL_SKILL',
  SPECIAL_SKILL_FRAGMENT: 'SPECIAL_SKILL_FRAGMENT',
  GOLD_MATERIAL: 'GOLD_MATERIAL',
  BLUE_SCROLL_FRAGMENT: 'BLUE_SCROLL_FRAGMENT',
  WHITE_GREEN_BLUE_SCROLL: 'WHITE_GREEN_BLUE_SCROLL',
  PURPLE_GOLD_SCROLL: 'PURPLE_GOLD_SCROLL',
  GOLD_EQUIPMENT: 'GOLD_EQUIPMENT',
  SILVER_BOX: 'SILVER_BOX',
  SILVER_BAG: 'SILVER_BAG',
  COPPER_BAG: 'COPPER_BAG',
  GUILD_BOX: 'GUILD_BOX',
  REFINE_MATERIAL: 'REFINE_MATERIAL',
  NANKE_STONE: 'NANKE_STONE',
  HAOPO_STONE: 'HAOPO_STONE',
  FENGTIAN_JADE: 'FENGTIAN_JADE',
  SEAL_SKILL: 'SEAL_SKILL',
  YIZHAOZHIJIAN: 'YIZHAOZHIJIAN',
  MENGZAI_CONCH: 'MENGZAI_CONCH',
  CURRENCY: 'CURRENCY',
  TIANGONG_MATERIAL: 'TIANGONG_MATERIAL'
} as const

export type ItemCategory = keyof typeof ITEM_CATEGORIES

export interface Item {
  id: string
  name: string
  probability: number
  count: number
  isRare?: boolean
}

export type ItemPool = Record<ItemCategory, Item[]>

export type ServerType = 'jingshi' | 'tianwen' | 'pingxing'

export type ProbabilityRange = Record<ItemCategory, number>

export type LotteryType = ServerType