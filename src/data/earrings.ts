import { data, Data } from '.'

export const earrings: Data[] = [
  {
    name: '战争之主耳环',
    type: '耳环',
    skillAttacks: [12],
    attackEnhancement: 4528,
    elementEnhancement: 50,
    other: '50 非火强；15 火强；10 火抗',
  },
  {
    name: '时间之念耳环',
    type: '耳环',
    skillAttacks: [12],
    attackEnhancement: 4528,
    other: '附魔效果未计算',
  },
  {
    name: '徘徊之魂耳环',
    type: '耳环',
    skillAttacks: [12],
    attackEnhancement: 7492,
    cd: 10,
    other: '不能前冲只能走',
  },
  {
    name: '无色冰晶耳环',
    prefix: '非无色',
    type: '耳环',
    skillAttacks: [12, 20],
    attackEnhancement: 4528,
    cd: 30,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '无色冰晶耳环',
    prefix: '无色',
    type: '耳环',
    skillAttacks: [12, 20],
    attackEnhancement: 4528,
    cd: -15,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '无色冰晶耳环',
    prefix: '觉醒',
    type: '耳环',
    skillAttacks: [12, -25],
    attackEnhancement: 4528,
    cd: -15,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '万物引力耳环',
    type: '耳环',
    skillAttacks: [12, 12],
    attackEnhancement: 5604,
    speed: {
      moveSpeed: 28,
    },
  },
  {
    name: '无尽的生机耳环',
    type: '耳环',
    skillAttacks: [12],
    attackEnhancement: 4528,
    elementEnhancement: 50,
    other: '50 非光强；15 光强；10 光抗',
  },
  {
    name: '灵犀之音耳环',
    type: '耳环',
    skillAttacks: [12],
    attackEnhancement: 12206,
    other: '打字；自冰冻',
  },
  {
    name: '隐匿之叹息耳环',
    type: '耳环',
    skillAttacks: [12, 15],
    attackEnhancement: 5874,
    cd: -5,
  },
  {
    name: '苍空飞羽耳环',
    type: '耳环',
    skillAttacks: [12, 2, 5],
    attackEnhancement: 3935 + 2964,
    speed: {
      attackSpeed: 15,
      castingSpeed: 22.5,
      moveSpeed: 15,
    },
    other: '使敌人出血',
  },
  {
    name: '未知文明 - 双子石',
    type: '耳环',
    skillAttacks: [12],
    attackEnhancement: 4528,
    elementEnhancement: 50,
    other: '50 非冰强；15 冰强；10 冰抗',
  },
  {
    name: '晨曦的新芽耳环',
    type: '耳环',
    skillAttacks: [12],
    attackEnhancement: 4528,
    elementEnhancement: 50,
    other: '50 非暗强；15 暗强；10 暗抗',
  },
  {
    name: '爆炸型：小型战术信号弹',
    type: '耳环',
    skillAttacks: [12],
    attackEnhancement: 6144,
    elementEnhancement: 15,
    speed: {
      attackSpeed: 30,
      castingSpeed: 30,
      moveSpeed: 53,
    },
  },
  {
    name: '堕落的灵魂',
    prefix: '无色',
    type: '耳环',
    skillAttacks: [12, 8],
    attackEnhancement: 4796,
    cd: 10,
    other: '无色消耗',
  },
  {
    name: '猎龙者之证 - 龙鳞耳环',
    type: '耳环',
    skillAttacks: [12],
    attackEnhancement: 4662,
    elementEnhancement: 30,
    other: 'Lv75 技能 +10 级',
  },
  {
    name: '脉冲之源耳环',
    prefix: '非觉醒',
    type: '耳环',
    skillAttacks: [12, 15],
    attackEnhancement: 7277,
  },
  {
    name: '脉冲之源耳环',
    prefix: '觉醒',
    type: '耳环',
    skillAttacks: [12],
    attackEnhancement: 7277,
  },
  {
    name: '黄昏圣堂',
    type: '耳环',
    skillAttacks: [12, 5],
    attackEnhancement: 10498,
    elementEnhancement: 15,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
    other: '按 BOSS 50% 以下 HP 计算；攻击回血；-10 全属抗',
  },
  {
    name: '原核之芯耳环',
    prefix: '石化破韧',
    type: '耳环',
    skillAttacks: [12, 20, 5, 15],
    attackEnhancement: 2560,
    speed: {
      attackSpeed: 5,
    },
  },
  {
    name: '原核之芯耳环',
    prefix: '未破韧',
    type: '耳环',
    skillAttacks: [12],
    attackEnhancement: 2560,
    speed: {
      attackSpeed: 5,
    },
  },
  {
    name: '诅咒的枷锁',
    type: '耳环',
    skillAttacks: [12, 2, 5],
    attackEnhancement: 3787,
    cd: 20,
    other: 'HP 回复效果增加；CD 按 2 个异常对象计算',
  },
  {
    name: '吞噬风暴耳环',
    type: '耳环',
    skillAttacks: [12, 10],
    attackEnhancement: 5066,
    elementEnhancement: 15,
    other: '消耗品回蓝增加；-20% 蓝耗',
  },
  {
    name: '超小型GPS',
    prefix: '80% 韧性',
    type: '耳环',
    skillAttacks: [12, 8],
    attackEnhancement: 4258,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
    other: '破韧',
  },
  {
    name: '超小型GPS',
    prefix: '30% 韧性',
    type: '耳环',
    skillAttacks: [12, 13],
    attackEnhancement: 4258,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
    other: '破韧',
  },
  {
    name: '超小型GPS',
    prefix: '破韧',
    type: '耳环',
    skillAttacks: [12, 20],
    attackEnhancement: 4258,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
    other: '破韧',
  },
  {
    name: '终结永恒时光的夙愿',
    type: '耳环',
    skillAttacks: [12],
    attackEnhancement: 9929,
    abnormal: {
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,
      increasedConversionRate: 0,
      increasedAbnormalDamageEnhancement: 0.05,
    },
    other: '中毒异常',
  },
  {
    name: '泪之宝玉',
    type: '耳环',
    skillAttacks: [12, 12, 4],
    attackEnhancement: 3720,
    other: '按 4 种自异常计算',
  },
]
