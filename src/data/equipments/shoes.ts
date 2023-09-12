import { Data } from '.'

export const shoes: Data[] = [
  {
    name: 'HEM 加固鞋',
    prefix: '单异常对象',
    type: 'shoe',
    damageValue: 6414 + 2964 + 712,
    skillAtk: [7],
    elementalDamage: 15,
  },
  {
    name: 'HEM 加固鞋',
    prefix: '2 个异常对象',
    type: 'shoe',
    damageValue: 6414 + 2964 + 712 * 2,
    skillAtk: [7],
    elementalDamage: 15,
  },
  {
    name: 'HEM 加固鞋',
    prefix: '5 个异常对象',
    type: 'shoe',
    damageValue: 6414 + 2964 + 712 * 5,
    skillAtk: [7],
    elementalDamage: 15,
  },
  {
    name: '白色秘境皮鞋',
    type: 'shoe',
    damageValue: 5604,
    skillAtk: [3],
    other: '按 3% 技攻附魔计算',
  },
  {
    name: '万念俱灰短靴',
    type: 'shoe',
    damageValue: 5604 + 800 * 5,
    skillAtk: [13],
  },
  {
    name: '暗影之迹短靴',
    prefix: '15 ~ 30 级技能',
    type: 'shoe',
    damageValue: 5066,
    skillAtk: [15],
    speed: 30,
  },
  {
    name: '大地的践踏短靴',
    type: 'shoe',
    damageValue: 6952,
    skillAtk: [7],
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
      moveSpeed: 8,
    },
  },
  {
    name: '流星飞电战靴',
    prefix: '2 个异常对象',
    type: 'shoe',
    damageValue: 6858 + 712 * 2,
    skillAtk: [11],
    speed: {
      attackSpeed: 20,
      castingSpeed: 30,
      moveSpeed: 20,
    },
  },
  {
    name: '流星飞电战靴',
    prefix: '5 个异常对象',
    type: 'shoe',
    damageValue: 6858 + 712 * 5,
    skillAtk: [11],
    speed: {
      attackSpeed: 20,
      castingSpeed: 30,
      moveSpeed: 20,
    },
  },
  {
    name: '祈愿之息短靴',
    type: 'shoe',
    damageValue: 3988 + 2964,
    skillAtk: [5, 12],
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
      moveSpeed: 8,
    },
  },
  {
    name: '摇曳的残影短靴',
    type: 'shoe',
    damageValue: 5604 + 2223,
    elementalDamage: 25,
    coldDownReduce: 0.15,
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '天翼之守护短靴',
    type: 'shoe',
    damageValue: 5604 + 4001,
    skillAtk: [10],
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '黑暗吞噬短靴',
    prefix: '技攻',
    type: 'shoe',
    damageValue: 5510,
    skillAtk: [10],
    abnormal: {
      type: 'posion',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.1,
    },
    speed: 15,
  },
  {
    name: '黑暗吞噬短靴',
    prefix: 'CD',
    type: 'shoe',
    damageValue: 5510,
    abnormal: {
      type: 'posion',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.1,
    },
    coldDownRecover: 0.3,
    speed: 15,
  },
  {
    name: '黑暗吞噬短靴',
    prefix: '技攻，毒王',
    type: 'shoe',
    damageValue: 5510,
    skillAtk: [10],
    abnormal: {
      type: 'posion',
      prevConversionRate: 0.74,
      prevAbnormalDamageEnhancement: 0.5,

      increasedAbnormalDamageEnhancement: 0.1,
    },
    speed: 15,
  },
  {
    name: '循环的自然之法',
    prefix: '未破韧',
    type: 'shoe',
    damageValue: 6414,
    skillAtk: [2],
    elementalDamage: 15,
    speed: {
      attackSpeed: 10,
      castingSpeed: 15,
    },
  },
  {
    name: '循环的自然之法',
    prefix: '破韧',
    type: 'shoe',
    damageValue: 6414 + 1284,
    skillAtk: [2],
    elementalDamage: 15,
    speed: {
      attackSpeed: 10,
      castingSpeed: 15,
    },
  },
  {
    name: '循环的自然之法',
    prefix: '破韧，3 个异常对象',
    type: 'shoe',
    damageValue: 6414 + 1284 * 3,
    skillAtk: [2],
    elementalDamage: 15,
    speed: {
      attackSpeed: 10,
      castingSpeed: 15,
    },
  },
  {
    name: '高科技战术强化靴',
    type: 'shoe',
    damageValue: 5510,
    skillAtk: [8],
    elementalDamage: 15,
    coldDownReduce: 0.05 * 4,
  },
  {
    name: '暴走之驱战靴',
    type: 'shoe',
    damageValue: 6414 + 519 * 4,
    skillAtk: [8],
  },
  {
    name: '龙之开拓者短靴',
    type: 'shoe',
    damageValue: 5874 + 1778,
    elementalDamage: 4 * 5,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
      moveSpeed: 8,
    },
  },
  {
    name: '天才技术大师的加厚长靴',
    prefix: '375% 蓝耗',
    type: 'shoe',
    damageValue: 2910 + 652 * 5,
    skillAtk: [5 * 3.75],
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '天才技术大师的加厚长靴',
    prefix: '475% 蓝耗',
    type: 'shoe',
    damageValue: 2910 + 652 * 5,
    skillAtk: [5 * 4.75],
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '天才技术大师的加厚长靴',
    prefix: '500% 蓝耗',
    type: 'shoe',
    damageValue: 2910 + 652 * 5,
    skillAtk: [5 * 5],
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '无畏的勇气短靴',
    type: 'shoe',
    damageValue: 6414 + 3260,
    skillAtk: [3, 3],
    elementalDamage: 25,
    speed: {
      moveSpeed: 8,
    },
    other: '等级增加估算为 2 个 3% 技攻',
  },
  {
    name: '蒸汽朋克音速鞋',
    type: 'shoe',
    damageValue: 4972,
  },
  {
    name: '玉化亡灵长靴',
    type: 'shoe',
    damageValue: 4796 + 2223,
    skillAtk: [15],
    speed: {
      attackSpeed: 24,
      castingSpeed: 24,
      moveSpeed: 8,
    },
  },
  {
    name: '流星追月短靴',
    type: 'shoe',
    damageValue: 4917 + 371 * 10,
    skillAtk: [5],
    coldDownReduce: 0.15,
  },
  {
    name: '赛博音速长靴',
    prefix: '100% 攻速',
    type: 'shoe',
    damageValue: 2642,
    skillAtk: [10],
  },
  {
    name: '赛博音速长靴',
    prefix: '120% 攻速',
    type: 'shoe',
    damageValue: 2642,
    skillAtk: [20],
  },
  {
    name: '赛博音速长靴',
    prefix: '140% 攻速',
    type: 'shoe',
    damageValue: 2642,
    skillAtk: [30],
  },
  {
    name: '所愿之行动',
    type: 'shoe',
    damageValue: 6048,
    skillAtk: [13],
    elementalDamage: 15,
  },
  {
    name: '告别过去的前进',
    type: 'shoe',
    damageValue: 6318 + 3705,
    skillAtk: [13],
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '超界次元',
    prefix: '未包含 TP 技能',
    type: 'shoe',
    damageValue: 6682,
    skillAtk: [8],
    elementalDamage: 10,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '超界次元',
    prefix: '包含 TP 技能',
    type: 'shoe',
    damageValue: 6682,
    skillAtk: [8, 10],
    elementalDamage: 10,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
    other: '1 级 TP 按 10% 技攻计算',
  },
]
