import { JINGSHI_ITEM_POOL } from './jingshiItems'

export const PINGXING_PROBABILITY_RANGES = {
  GOLD_EQUIPMENT_MATERIAL: 0.5248,
  BLUE_SCROLL_FRAGMENT: 0.1815,
  PURPLE_GOLD_SCROLL_FRAGMENT: 0.0909,
  PURPLE_GOLD_SCROLL: 0.0011,
  SPECIAL_SKILL_FRAGMENT: 0.0034,
  CURRENCY: 0.0604,
  REFINE_MATERIAL: 0.1168,
  TIANGONG_MATERIAL: 0.0211
}

export const PINGXING_ITEM_POOL = {
  ...JINGSHI_ITEM_POOL,
  GOLD_EQUIPMENT_MATERIAL: [
    {
      id: 'liulizhuizhu',
      name: '琉璃缀珠',
      probability: 0.49,
      count: 2
    },
    {
      id: 'hongfeijincuo',
      name: '红翡金错',
      probability: 0.21,
      count: 1
    },
    {
      id: 'jiuquzhu',
      name: '九曲珠',
      probability: 0.06,
      count: 1,
    },
    {
      id: 'zhaodanjing',
      name: '照胆镜',
      probability: 0.06,
      count: 1,
    },
    {
      id: 'jinbiluo',
      name: '金笸箩',
      probability: 0.06,
      count: 1,
    },
    {
      id: 'youxianzhen',
      name: '游仙枕',
      probability: 0.06,
      count: 1,
      
    },
    {
      id: 'zhaoshibei',
      name: '照世杯',
      probability: 0.06,
      count: 1,
      
    }
  ],
  BLUE_SCROLL_FRAGMENT: [
    {
      id: 'shenmaijing_fragment',
      name: '《神脉经》碎片',
      probability: 0.1667,
      count: 25
    },
    {
      id: 'wuyueshending_fragment',
      name: '《五岳神定》碎片',
      probability: 0.1667,
      count: 25
    },
    {
      id: 'kuchan_fragment',
      name: '《苦禅》碎片',
      probability: 0.1667,
      count: 25
    },
    {
      id: 'xiaohuntianfo_fragment',
      name: '《销魂天佛》碎片',
      probability: 0.1667,
      count: 25
    },
    {
      id: 'dujing_fragment',
      name: '《毒经》碎片',
      probability: 0.1667,
      count: 25
    },
    {
      id: 'mingyugong_fragment',
      name: '《明玉功》碎片',
      probability: 0.1667,
      count: 25
    }
  ],
  PURPLE_GOLD_SCROLL_FRAGMENT: [
    {
      id: 'xiaowuxianggong_fragment',
      name: '《小无相功》碎片',
      probability: 0.0417,
      count: 4
    },
    {
      id: 'xuanminxinqu_fragment',
      name: '《玄冥心曲》碎片',
      probability: 0.0417,
      count: 4
    },
    {
      id: 'jiayishengong_fragment',
      name: '《嫁衣神功》碎片',
      probability: 0.0417,
      count: 4
    },
    {
      id: 'qingxinjue_fragment',
      name: '《清心诀》碎片',
      probability: 0.0417,
      count: 4
    },
    {
      id: 'xisuijing_fragment',
      name: '《洗髓经》碎片',
      probability: 0.0417,
      count: 4
    },
    {
      id: 'zhuyoushu_fragment',
      name: '《祝由术》碎片',
      probability: 0.0417,
      count: 4
    },
    {
      id: 'liuyaodao_fragment',
      name: '《六爻道》碎片',
      probability: 0.0417,
      count: 4
    },
    {
      id: 'xiangyijianghu_fragment',
      name: '《香溢江湖》碎片',
      probability: 0.0417,
      count: 4
    },
    {
      id: 'putixinyinglu_fragment',
      name: '《菩提心影录》碎片',
      probability: 0.0417,
      count: 4
    },
    {
      id: 'sizhaoshengong_fragment',
      name: '《四照神功》碎片',
      probability: 0.0417,
      count: 4
    },
    {
      id: 'tianhe_fragment',
      name: '《天合》碎片',
      probability: 0.0417,
      count: 4
    },
    {
      id: 'fuluanshu_fragment',
      name: '《扶鸾术》碎片',
      probability: 0.0417,
      count: 4
    },
    {
      id: 'qingfengjue_fragment',
      name: '《清风诀》碎片',
      probability: 0.0217,
      count: 1
    },
    {
      id: 'qinghanjue_fragment',
      name: '《清寒决》碎片',
      probability: 0.0217,
      count: 1
    },
    {
      id: 'yijinjing_fragment',
      name: '《易筋经》碎片',
      probability: 0.0217,
      count: 1
    },
    {
      id: 'jingangjing_fragment',
      name: '《金刚经》碎片',
      probability: 0.0217,
      count: 1
    },
    {
      id: 'weifengfuling_fragment',
      name: '《微风扶铃》碎片',
      probability: 0.0217,
      count: 1
    },
    {
      id: 'mengjingjianghu_fragment',
      name: '《梦境江湖》碎片',
      probability: 0.0217,
      count: 1
    },
    {
      id: 'taijijin_fragment',
      name: '《太极劲》碎片',
      probability: 0.0217,
      count: 1
    },
    {
      id: 'hunyuangong_fragment',
      name: '《混元功》碎片',
      probability: 0.0217,
      count: 1
    },
    {
      id: 'xuedaojue_fragment',
      name: '《血刀决》碎片',
      probability: 0.0217,
      count: 1
    },
    {
      id: 'jianyi_fragment',
      name: '《坚毅》碎片',
      probability: 0.0217,
      count: 1
    },
    {
      id: 'jingangmumu_fragment',
      name: '《金刚怒目》碎片',
      probability: 0.0217,
      count: 1
    },
    {
      id: 'wuxianggong_fragment',
      name: '《无相神功》碎片',
      probability: 0.0217,
      count: 1
    },
    {
      id: 'zhanlujue_fragment',
      name: '《湛露决》碎片',
      probability: 0.0217,
      count: 1
    },
    {
      id: 'xinglujue_fragment',
      name: '《行露决》碎片',
      probability: 0.0217,
      count: 1
    },
    {
      id: 'zhenguibuci_fragment',
      name: '《贞龟卜辞》碎片',
      probability: 0.0217,
      count: 1
    },
    {
      id: 'luoyinshu_fragment',
      name: '《落阴术》碎片',
      probability: 0.0217,
      count: 1
    },
    {
      id: 'qingshuijue_fragment',
      name: '《清水决》碎片',
      probability: 0.0217,
      count: 1
    },
    {
      id: 'xinjing_fragment',
      name: '《心经》碎片',
      probability: 0.0217,
      count: 1
    },
    {
      id: 'qingheyin_fragment',
      name: '《清荷引梦》碎片',
      probability: 0.0217,
      count: 1
    },
    {
      id: 'xiaoyaoyou_fragment',
      name: '《逍遥游》碎片',
      probability: 0.0217,
      count: 1
    },
    {
      id: 'xiantiangong_fragment',
      name: '《先天功》碎片',
      probability: 0.0217,
      count: 1
    },
    {
      id: 'jiefashouchangsheng_fragment',
      name: '《结发受长生》碎片',
      probability: 0.0217,
      count: 1
    },
    {
      id: 'sanweiyuce_fragment',
      name: '《三危玉策》碎片',
      probability: 0.0217,
      count: 1
    }
  ],
  PURPLE_GOLD_SCROLL: [
    {
      id: 'xiaowuxianggong',
      name: '《小无相功》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'xuanminxinqu',
      name: '《玄冥心曲》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'jiayishengong',
      name: '《嫁衣神功》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'qingxinjue',
      name: '《清心诀》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'xisuijing',
      name: '《洗髓经》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'zhuyoushu',
      name: '《祝由术》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'liuyaodao',
      name: '《六爻道》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'xiangyijianghu',
      name: '《香溢江湖》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'putixinyinglu',
      name: '《菩提心影录》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'sizhaoshengong',
      name: '《四照神功》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'tianhe',
      name: '《天合》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'fuluanshu',
      name: '《扶鸾术》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'qingfengjue',
      name: '《清风诀》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'qinghanjue',
      name: '《清寒决》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'yijinjing',
      name: '《易筋经》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'jingangjing',
      name: '《金刚经》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'weifengfuling',
      name: '《微风扶铃》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'mengjingjianghu',
      name: '《梦境江湖》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'taijijin',
      name: '《太极劲》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'hunyuangong',
      name: '《混元功》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'xuedaojue',
      name: '《血刀决》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'jianyi',
      name: '《坚毅》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'jingangmumu',
      name: '《金刚怒目》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'wuxianggong',
      name: '《无相神功》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'zhanlujue',
      name: '《湛露决》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'xinglujue',
      name: '《行露决》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'zhenguibuci',
      name: '《贞龟卜辞》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'luoyinshu',
      name: '《落阴术》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'qingshuijue',
      name: '《清水决》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'xinjing',
      name: '《心经》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'qingheyin',
      name: '《清荷引梦》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'xiaoyaoyou',
      name: '《逍遥游》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'xiantiangong',
      name: '《先天功》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'jiefashouchangsheng',
      name: '《结发受长生》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'sanweiyuce',
      name: '《三危玉策》',
      probability: 0.0217,
      count: 1,
      isRare: true
    }
  ],
  SPECIAL_SKILL_FRAGMENT: [
    {
      id: 'kaiwu_purple',
      name: '开物紫色特技碎片',
      probability: 0.95,
      count: 1
    },
    {
      id: 'kaiwu_gold',
      name: '开物金色特技碎片',
      probability: 0.05,
      count: 1,
      isRare: true
    }
  ],
  CURRENCY: [
    {
      id: 'silver_note',
      name: '一袋银钞',
      probability: 0.3,
      count: 1
    },
    {
      id: 'copper_coin',
      name: '100万铜钱',
      probability: 0.7,
      count: 1
    }
  ],
  REFINE_MATERIAL: [
    {
      id: 'high_cuishi',
      name: '高级萃石',
      probability: 1,
      count: 60
    }
  ],
  TIANGONG_MATERIAL: [
    {
      id: 'tiangong_qishi',
      name: '天工奇石',
      probability: 1,
      count: 3
    }
  ]
} 