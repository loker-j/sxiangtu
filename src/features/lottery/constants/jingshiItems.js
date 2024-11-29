export const JINGSHI_PROBABILITY_RANGES = {
  GOLD_EQUIPMENT_MATERIAL: 0.4641,    // 金色装备合成材料
  PURPLE_GOLD_SCROLL_FRAGMENT: 0.0875, // 紫色金色秘笈碎片
  BLUE_SCROLL_FRAGMENT: 0.0341,       // 蓝色秘笈碎片
  WHITE_GREEN_BLUE_SCROLL: 0.1815,    // 白绿蓝色秘笈整本
  PURPLE_GOLD_SCROLL: 0.0013,         // 紫色金色秘笈整本
  GOLD_EQUIPMENT: 0.0076,             // 整件金装
  SPECIAL_SKILL: 0.0004,              // 高级特技谱
  SILVER_BOX: 0.0120,                 // 银票宝箱
  SILVER_BAG: 0.0284,                 // 一袋银两
  COPPER_BAG: 0.0227,                 // 一袋铜钱
  GUILD_BOX: 0.0095,                  // 帮派金匣
  REFINE_MATERIAL: 0.0909,            // 高级洗练材料
  NANKE_STONE: 0.0600                 // 各品质南柯石
}

export const JINGSHI_ITEM_POOL = {
  GOLD_EQUIPMENT_MATERIAL: [
    {
      id: 'hongfeijincuo',
      name: '红翡金错',
      probability: 0.3,
      count: 1
    },
    {
      id: 'liulizhuizhu',
      name: '琉璃缀珠',
      probability: 0.7,
      count: 2
    }
  ],

  WHITE_GREEN_BLUE_SCROLL_4: [
    {
      id: 'gangdao',
      name: '《钢刃》',
      probability: 0.0714,
      count: 4
    },
    {
      id: 'tiebushan',
      name: '《铁布衫》',
      probability: 0.0714,
      count: 4
    },
    {
      id: 'qihuangzhishu',
      name: '《岐黄之术》',
      probability: 0.0714,
      count: 4
    },
    {
      id: 'wudangwuji',
      name: '《武当武籍》',
      probability: 0.0714,
      count: 4
    },
    {
      id: 'anxiangwuji',
      name: '《暗香武籍》',
      probability: 0.0714,
      count: 4
    },
    {
      id: 'shaolinwuji',
      name: '《少林武籍》',
      probability: 0.0714,
      count: 4
    },
    {
      id: 'huashanwuji',
      name: '《华山武籍》',
      probability: 0.0714,
      count: 4
    },
    {
      id: 'yunmengwuji',
      name: '《云梦武籍》',
      probability: 0.0714,
      count: 4
    },
    {
      id: 'guanshanwuji',
      name: '《关山武籍》',
      probability: 0.0714,
      count: 4
    },
    {
      id: 'dawuwuji',
      name: '《大巫武籍》',
      probability: 0.0714,
      count: 4
    },
    {
      id: 'canghaiwuji',
      name: '《沧海武籍》',
      probability: 0.0714,
      count: 4
    },
    {
      id: 'taiyinwuji',
      name: '《太阴武籍》',
      probability: 0.0714,
      count: 4
    },
    {
      id: 'jielanwuji',
      name: '《伽蓝武籍》',
      probability: 0.0714,
      count: 4
    },
    {
      id: 'lingyinwuji',
      name: '《泠音武籍》',
      probability: 0.0714,
      count: 4
    }
  ],

  WHITE_GREEN_BLUE_SCROLL_2: [
    {
      id: 'jingangfumozhou',
      name: '《金刚伏魔咒》',
      probability: 0.1429,
      count: 2
    },
    {
      id: 'daozangfengzhi',
      name: '《道藏风止》',
      probability: 0.1429,
      count: 2
    },
    {
      id: 'qishangxinfa',
      name: '《七伤心法》',
      probability: 0.1429,
      count: 2
    },
    {
      id: 'jingxinzhou',
      name: '《静心咒》',
      probability: 0.1429,
      count: 2
    },
    {
      id: 'miaojiafadao',
      name: '《苗家刀法》',
      probability: 0.1429,
      count: 2
    },
    {
      id: 'chuanxinzhang',
      name: '《穿心掌法》',
      probability: 0.1429,
      count: 2
    },
    {
      id: 'nianhuazhi',
      name: '《拈花指法》',
      probability: 0.1429,
      count: 2
    }
  ],

  WHITE_GREEN_BLUE_SCROLL_1: [
    {
      id: 'kuchan',
      name: '《苦禅》',
      probability: 0.1667,
      count: 1
    },
    {
      id: 'wuyueshending',
      name: '《五岳神定》',
      probability: 0.1667,
      count: 1
    },
    {
      id: 'shenmaijing',
      name: '《神脉经》',
      probability: 0.1667,
      count: 1
    },
    {
      id: 'xiaohuntianfo',
      name: '《销魂天佛》',
      probability: 0.1667,
      count: 1
    },
    {
      id: 'dujing',
      name: '《毒经》',
      probability: 0.1667,
      count: 1
    },
    {
      id: 'mingyugong',
      name: '《明玉功》',
      probability: 0.1667,
      count: 1
    }
  ],

  GOLD_EQUIPMENT: [
    {
      id: 'gold_crown',
      name: '60级金装发冠',
      probability: 0.25,
      count: 1,
      isRare: true
    },
    {
      id: 'gold_cloth',
      name: '60级金装衣服',
      probability: 0.25,
      count: 1,
      isRare: true
    },
    {
      id: 'gold_pants',
      name: '60级金装下装',
      probability: 0.25,
      count: 1,
      isRare: true
    },
    {
      id: 'gold_belt',
      name: '60级金装腰带',
      probability: 0.25,
      count: 1,
      isRare: true
    }
  ],

  SPECIAL_SKILL: {
    GOLD_SPECIAL_SKILL: [
      {
        id: 'yazhi',
        name: '压制',
        probability: 0.0909,
        count: 1,
        isRare: true
      },
      {
        id: 'xianfazhiren',
        name: '先发制人',
        probability: 0.0909,
        count: 1,
        isRare: true
      },
      {
        id: 'zhenhaixiongyun',
        name: '镇海冲云',
        probability: 0.0909,
        count: 1,
        isRare: true
      },
      {
        id: 'jinganghuti',
        name: '金刚护体',
        probability: 0.0909,
        count: 1,
        isRare: true
      },
      {
        id: 'guruojintang',
        name: '固若金汤',
        probability: 0.0909,
        count: 1,
        isRare: true
      },
      {
        id: 'beishui',
        name: '背水',
        probability: 0.0909,
        count: 1,
        isRare: true
      },
      {
        id: 'jinzhongzhao',
        name: '金钟罩',
        probability: 0.0909,
        count: 1,
        isRare: true
      },
      {
        id: 'shixue',
        name: '嗜血',
        probability: 0.0909,
        count: 1,
        isRare: true
      },
      {
        id: 'shixin',
        name: '噬心',
        probability: 0.0909,
        count: 1,
        isRare: true
      },
      {
        id: 'yiwang',
        name: '遗忘',
        probability: 0.0909,
        count: 1,
        isRare: true
      },
      {
        id: 'touxi',
        name: '偷袭',
        probability: 0.0909,
        count: 1,
        isRare: true
      }
    ],
    PURPLE_SPECIAL_SKILL: [
      {
        id: 'wuwangwuwo',
        name: '无妄无我',
        probability: 0.1,
        count: 1
      },
      {
        id: 'shenli_wai',
        name: '神力·外',
        probability: 0.1,
        count: 1
      },
      {
        id: 'taxuewuhen',
        name: '踏雪无痕',
        probability: 0.1,
        count: 1
      },
      {
        id: 'shenli_nei',
        name: '神力·内',
        probability: 0.1,
        count: 1
      },
      {
        id: 'jinghong',
        name: '惊鸿',
        probability: 0.1,
        count: 1
      },
      {
        id: 'gongshoujianbi',
        name: '攻守兼备',
        probability: 0.1,
        count: 1
      },
      {
        id: 'miaoshou',
        name: '妙手',
        probability: 0.1,
        count: 1
      },
      {
        id: 'fuzu',
        name: '缚足',
        probability: 0.1,
        count: 1
      },
      {
        id: 'xuruo',
        name: '虚弱',
        probability: 0.1,
        count: 1
      },
      {
        id: 'baonue',
        name: '暴虐',
        probability: 0.1,
        count: 1
      }
    ]
  },

  SILVER_BOX: [
    {
      id: 'silver_box',
      name: '银票宝箱',
      probability: 1,  // 单个物品时概率为1
      count: 1
    }
  ],

  SILVER_BAG: [
    {
      id: 'silver_bag',
      name: '一袋银两',
      probability: 1,
      count: 4
    }
  ],

  COPPER_BAG: [
    {
      id: 'copper_bag',
      name: '一袋铜钱',
      probability: 1,
      count: 4
    }
  ],

  GUILD_BOX: [
    {
      id: 'guild_box',
      name: '帮派金匣',
      probability: 1,
      count: 1
    }
  ],

  REFINE_MATERIAL: [
    {
      id: 'high_cuishi',
      name: '高级萃石',
      probability: 0.8,
      count: 80
    },
    {
      id: 'high_cuiyu',
      name: '高级萃玉',
      probability: 0.2,
      count: 2
    }
  ],

  NANKE_STONE: [
    {
      id: 'nanke_ji',
      name: '南柯石·极',
      probability: 0.25,
      count: 1
    },
    {
      id: 'nanke_zhen',
      name: '南柯石·珍',
      probability: 0.25,
      count: 1
    },
    {
      id: 'nanke_fan',
      name: '南柯石·凡',
      probability: 0.25,
      count: 8
    },
    {
      id: 'nanke_pu',
      name: '南柯石·普',
      probability: 0.25,
      count: 40
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
      id: 'xuanminxin',
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
    },
    {
      id: 'fenzhuzhengjing',
      name: '《焚烛真经》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'cuoyingxuchen',
      name: '《错影虚尘》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'moluojie',
      name: '《摩罗偈》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'zhejiayuyu',
      name: '《折枷沐雨》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'chunqiudaixu',
      name: '《春秋代序》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'jiushaoyue',
      name: '《九韶乐》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'suimoyan',
      name: '《岁末晏》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'yuanxiang',
      name: '《沅湘》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'longmingduo',
      name: '《龙鸣铎》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'huiyanjue',
      name: '《回雁诀》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'huqianjing',
      name: '《虎钤经》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'woqibafa',
      name: '《握奇八法》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'zhaohun',
      name: '《招魂》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'jiwuming',
      name: '《极巫溟》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'guanzhengxing',
      name: '《观祯行》',
      probability: 0.0217,
      count: 1,
      isRare: true
    },
    {
      id: 'wahuangyiyin',
      name: '《娲皇遗音》',
      probability: 0.0217,
      count: 1,
      isRare: true
    }
  ],

  PURPLE_GOLD_SCROLL_FRAGMENT_4: [
    {
      id: 'xiaowuxianggong_fragment',
      name: '《小无相功》碎片',
      probability: 0.0833,  // 1/12
      count: 4
    },
    {
      id: 'xuanminxinqu_fragment',
      name: '《玄冥心曲》碎片',
      probability: 0.0833,
      count: 4
    },
    {
      id: 'jiayishengong_fragment',
      name: '《嫁衣神功》碎片',
      probability: 0.0833,
      count: 4
    },
    {
      id: 'qingxinjue_fragment',
      name: '《清心诀》碎片',
      probability: 0.0833,
      count: 4
    },
    {
      id: 'xisuijing_fragment',
      name: '《洗髓经》碎片',
      probability: 0.0833,
      count: 4
    },
    {
      id: 'zhuyoushu_fragment',
      name: '《祝由术》碎片',
      probability: 0.0833,
      count: 4
    },
    {
      id: 'liuyaodao_fragment',
      name: '《六爻道》碎片',
      probability: 0.0833,
      count: 4
    },
    {
      id: 'xiangyijianghu_fragment',
      name: '《香溢江湖》碎片',
      probability: 0.0833,
      count: 4
    },
    {
      id: 'putixinyinglu_fragment',
      name: '《菩提心影录》碎片',
      probability: 0.0833,
      count: 4
    },
    {
      id: 'sizhaoshengong_fragment',
      name: '《四照神功》碎片',
      probability: 0.0833,
      count: 4
    },
    {
      id: 'tianhe_fragment',
      name: '《天合》碎片',
      probability: 0.0833,
      count: 4
    },
    {
      id: 'fuluanshu_fragment',
      name: '《扶鸾术》碎片',
      probability: 0.0833,
      count: 4
    }
  ],

  PURPLE_GOLD_SCROLL_FRAGMENT_1: [
    {
      id: 'qingfengjue_fragment',
      name: '《清风诀》碎片',
      probability: 0.025,  // 1/40
      count: 1
    },
    {
      id: 'qinghanjue_fragment',
      name: '《清寒决》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'yijinjing_fragment',
      name: '《易筋经》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'jingangjing_fragment',
      name: '《金刚经》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'weifengfuling_fragment',
      name: '《微风扶铃》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'mengjingjianghu_fragment',
      name: '《梦境江湖》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'taijijin_fragment',
      name: '《太极劲》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'hunyuangong_fragment',
      name: '《混元功》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'xuedaojue_fragment',
      name: '《血刀决》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'jianyi_fragment',
      name: '《坚毅》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'jingangmumu_fragment',
      name: '《金刚怒目》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'wuxianggong_fragment',
      name: '《无相神功》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'zhanlujue_fragment',
      name: '《湛露决》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'xinglujue_fragment',
      name: '《行露决》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'zhenguibuci_fragment',
      name: '《贞龟卜辞》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'luoyinshu_fragment',
      name: '《落阴术》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'qingshuijue_fragment',
      name: '《清水决》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'xinjing_fragment',
      name: '《心经》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'qingheyin_fragment',
      name: '《清荷引梦》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'xiaoyaoyou_fragment',
      name: '《逍遥游》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'xiantiangong_fragment',
      name: '《先天功》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'jiefashouchangsheng_fragment',
      name: '《结发受长生》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'sanweiyuce_fragment',
      name: '《三危玉策》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'fenzhuzhengjing_fragment',
      name: '《焚烛真经》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'cuoyingxuchen_fragment',
      name: '《错影虚尘》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'moluojie_fragment',
      name: '《摩罗偈》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'zhejiayuyu_fragment',
      name: '《折枷沐雨》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'chunqiudaixu_fragment',
      name: '《春秋代序》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'jiushaoyue_fragment',
      name: '《九韶乐》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'suimoyan_fragment',
      name: '《岁末晏》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'yuanxiang_fragment',
      name: '《沅湘》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'longmingduo_fragment',
      name: '《龙鸣铎》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'huiyanjue_fragment',
      name: '《回雁诀》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'huqianjing_fragment',
      name: '《虎钤经》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'woqibafa_fragment',
      name: '《握奇八法》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'zhaohun_fragment',
      name: '《招魂》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'jiwuming_fragment',
      name: '《极巫溟》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'guanzhengxing_fragment',
      name: '《观祯行》碎片',
      probability: 0.025,
      count: 1
    },
    {
      id: 'wahuangyiyin_fragment',
      name: '《娲皇遗音》碎片',
      probability: 0.025,
      count: 1
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
  ]
} 