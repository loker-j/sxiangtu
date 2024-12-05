import { JINGSHI_ITEM_POOL } from './jingshiItems'

export const TIANWEN_PROBABILITY_RANGES = {
  GOLD_EQUIPMENT_MATERIAL: 0.4641,    // 金色装备合成材料
  PURPLE_GOLD_SCROLL_FRAGMENT: 0.0875, // 紫色金色秘笈碎片
  BLUE_SCROLL_FRAGMENT: 0.0341,       // 蓝色秘笈碎片
  WHITE_GREEN_BLUE_SCROLL: 0.1815,    // 白绿蓝色秘笈整本
  PURPLE_GOLD_SCROLL: 0.0013,         // 紫色金色秘笈整本
  GOLD_EQUIPMENT: 0.0076,             // 整件金装
  SPECIAL_SKILL: 0.0004,              // 高级特技谱
  SILVER_BOX: 0.0120,                 // 银票宝箱
  SILVER_BAG: 0.0284,                 // 一袋银两
  COPPER_BAG: 0.0177,                 // 一袋铜钱
  GUILD_BOX: 0.0095,                  // 帮派金匣
  REFINE_MATERIAL: 0.0559,            // 高级洗练材料
  NANKE_STONE: 0.0250,                // 各品质南柯石
  HAOPO_STONE: 0.0217,                // 皓魄石
  FENGTIAN_JADE: 0.0030,              // 四星单金条目奉天玉
  SEAL_SKILL: 0.0003,                 // 紫色篆铭技
  YIZHAOZHIJIAN: 0.0250,              // 珍品极品一招之见
  MENGZAI_CONCH: 0.0250               // 梦崽的海螺
}

export const TIANWEN_ITEM_POOL = {
  // 继承惊世服的基础配置
  ...JINGSHI_ITEM_POOL,
  
  // 天问服特有的物品
  HAOPO_STONE: [
    {
      id: 'haopo_stone',
      name: '皓魄石',
      probability: 1,  // 100%
      count: 3
    }
  ],

  FENGTIAN_JADE: [
    {
      id: 'fengtian_jade',
      name: '珍品奉天玉',
      probability: 1,  // 100%
      count: 1,
      isRare: true
    }
  ],

  SEAL_SKILL: [
    {
      id: 'zhuhenku',
      name: '诸恨苦',
      probability: 0.0909,  // 1/11
      count: 1,
      isRare: true
    },
    {
      id: 'qingyunxin',
      name: '青云心',
      probability: 0.0909,
      count: 1,
      isRare: true
    },
    {
      id: 'qianchengu',
      name: '迁尘骨',
      probability: 0.0909,
      count: 1,
      isRare: true
    },
    {
      id: 'ruhuomen',
      name: '入祸门',
      probability: 0.0909,
      count: 1,
      isRare: true
    },
    {
      id: 'gufengsha',
      name: '孤峰煞',
      probability: 0.0909,
      count: 1,
      isRare: true
    },
    {
      id: 'jiange_nei',
      name: '剑歌·内',
      probability: 0.0909,
      count: 1,
      isRare: true
    },
    {
      id: 'jiange_wai',
      name: '剑歌·外',
      probability: 0.0909,
      count: 1,
      isRare: true
    },
    {
      id: 'pili_nei',
      name: '霹雳·内',
      probability: 0.0909,
      count: 1,
      isRare: true
    },
    {
      id: 'pili_wai',
      name: '霹雳·外',
      probability: 0.0909,
      count: 1,
      isRare: true
    },
    {
      id: 'xingruhong',
      name: '行如虹',
      probability: 0.0909,
      count: 1,
      isRare: true
    },
    {
      id: 'zizhengxiong',
      name: '自峥嵘',
      probability: 0.0909,
      count: 1,
      isRare: true
    }
  ],

  YIZHAOZHIJIAN: [
    {
      id: 'yizhaozhijian_ji',
      name: '一招之见·极',
      probability: 0.45,  // 45%
      count: 1
    },
    {
      id: 'yizhaozhijian_zhen',
      name: '一招之见·珍',
      probability: 0.55,  // 55%
      count: 1
    }
  ],

  MENGZAI_CONCH: [
    {
      id: 'mengzai_conch',
      name: '梦崽的海螺',
      probability: 1,  // 100%
      count: 1
    }
  ]
} 