import { Data } from '.'

export const bottoms: Data[] = [
  {
    name: '荒漠之界长裤',
    type: 'bottom',
    damageValue: 4528,
    elementalDamage: 5 * 5 + 15,
  },
  {
    name: '白虹贯日长裤',
    type: 'bottom',
    damageValue: 5604,
  },
  {
    name: '混沌之幕护腿',
    type: 'bottom',
    damageValue: 5066 + 445 * 4,
    skillAtk: [1.5 * 4],
  },
  {
    name: '梵塔黑色长裤',
    type: 'bottom',
    damageValue: 4258,
    skillAtk: [5],
    coldDownReduce: -0.08,
    speed: {
      attackSpeed: 18,
      castingSpeed: 22,
    },
  },
  {
    name: '不倦旅程护腿',
    type: 'bottom',
    damageValue: 4796 + 2223,
    skillAtk: [-4],
    speed: {
      moveSpeed: 18,
    },
  },
  {
    name: '霜云暗影长裤',
    prefix: '未被击',
    type: 'bottom',
    damageValue: 3450,
    elementalDamage: 30 + 15,
  },
  {
    name: '霜云暗影长裤',
    prefix: '被击',
    type: 'bottom',
    damageValue: 3450,
    elementalDamage: 30 + 20 + 15,
  },
  {
    name: '舞台的华丽',
    type: 'bottom',
    damageValue: 4796 + 2223,
    elementalDamage: 15,
  },
  {
    name: '永不破碎的信念',
    prefix: '被击',
    type: 'bottom',
    damageValue: 3450,
    elementalDamage: 30 + 20 + 15,
  },
  {
    name: '和平之翼长裤',
    type: 'bottom',
    damageValue: 5336 + 2223,
  },
  {
    name: '沧海之覆护腿',
    prefix: '单异常对象',
    type: 'bottom',
    damageValue: 6682 + 712,
    abnormal: {
      type: 'posion',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.15,
    },
  },
  {
    name: '沧海之覆护腿',
    prefix: '2 个异常对象',
    type: 'bottom',
    damageValue: 6682 + 712 * 2,
    abnormal: {
      type: 'posion',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.15,
    },
  },
  {
    name: '沧海之覆护腿',
    prefix: '5 个异常对象',
    type: 'bottom',
    damageValue: 6682 + 712 * 5,
    abnormal: {
      type: 'posion',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.15,
    },
  },
  {
    name: '沧海之覆护腿',
    prefix: '单异常对象，毒王',
    type: 'bottom',
    damageValue: 6682 + 712,
    abnormal: {
      type: 'posion',
      prevConversionRate: 0.74,
      prevAbnormalDamageEnhancement: 0.5,

      increasedAbnormalDamageEnhancement: 0.15,
    },
  },
  {
    name: '隐匿的自然生命',
    prefix: '单异常对象',
    type: 'bottom',
    damageValue: 6414 + 712,
    elementalDamage: 10,
  },
  {
    name: '隐匿的自然生命',
    prefix: '2 个异常对象',
    type: 'bottom',
    damageValue: 6414 + 712 * 2,
    elementalDamage: 10,
  },
  {
    name: '隐匿的自然生命',
    prefix: '5 个异常对象',
    type: 'bottom',
    damageValue: 6414 + 712 * 5,
    elementalDamage: 10,
  },
  {
    name: '高科技战术护腿',
    type: 'bottom',
    damageValue: 5604,
    skillAtk: [6],
  },
  {
    name: '侵蚀的意志护腿',
    prefix: '被击',
    type: 'bottom',
    damageValue: 3450,
    elementalDamage: 30 + 20 + 15,
  },
  {
    name: '苍龙闪影护腿',
    type: 'bottom',
    damageValue: 5066 + 1186,
    elementalDamage: 4 * 5 + 3 * 5,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '天才技术大师的百宝裤',
    type: 'bottom',
    damageValue: 4796 + 3705,
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '神谕之信念',
    prefix: '被击',
    type: 'bottom',
    damageValue: 3450,
    elementalDamage: 30 + 20 + 15,
  },
  {
    name: '终极掌控者护腿',
    type: 'bottom',
    damageValue: 5874,
    coldDownReduce: 0.15,
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '玉化亡灵腿甲',
    type: 'bottom',
    damageValue: 5066 + 2668,
    coldDownReduce: 0.08,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
      moveSpeed: 8,
    },
  },
  {
    name: '暴风骑士',
    type: 'bottom',
    damageValue: 6414 + 1037,
    coldDownRecover: 0.1,
  },
  {
    name: '机械装甲下装',
    prefix: '全身红 10',
    type: 'bottom',
    damageValue: 3988 + 136 * 20,
    skillAtk: [0.2 * 20],
    elementalDamage: 10,
    speed: 2 * 10,
  },
  {
    name: '机械装甲下装',
    prefix: '全身红 12',
    type: 'bottom',
    damageValue: 3988 + 136 * 24,
    skillAtk: [4.8],
    elementalDamage: 10,
    speed: 2 * 12,
  },
  {
    name: '指引胜利的正义',
    type: 'bottom',
    damageValue: 5604 + 296 * 10,
    elementalDamage: 15,
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '战胜噩梦的捷报',
    type: 'bottom',
    damageValue: 5336 + 2223,
    elementalDamage: 20,
  },
  {
    name: '穿云破雾之光',
    type: 'bottom',
    damageValue: 5604 + 2705,
  },
  {
    name: '恩特精灵护腿',
    type: 'bottom',
    damageValue: 593 + 1186 + 1186 + 1186,
    abnormal: {
      type: 'bleed',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.2,
    },
    other: '20% 出血伤害，3 个无用',
  },
  {
    name: '恩特精灵护腿',
    type: 'bottom',
    damageValue: 593 + 1186 + 178 * 10 + 1186 + 1630,
    elementalDamage: 15 + 15,
    abnormal: {
      type: 'bleed',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.2,
    },
    other: '20% 出血伤害，连击攻强，15 单，15 全',
  },
  {
    name: '深潜迷航长裤',
    type: 'bottom',
    damageValue: 1186 + 1186 + 1186 + 1630,
    skillAtk: [20 * 0.3],
    elementalDamage: 15 + 15,
    coldDownReduce: 0.2 * 0.3,
    other: 'Lv80 技攻，Lv80 冷却，15 单，15 全，按鹦鹉双 80 top剜心 30% 占比计算',
  },
]
