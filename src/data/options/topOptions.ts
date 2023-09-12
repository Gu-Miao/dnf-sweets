import { Option } from '.'

export const topOptions: Option[] = [
  {
    name: '25 属强',
    type: 'top',
    from: '森林之魔女上衣',
    damageValue: 889,
    elementalDamage: 25,
  },
  {
    name: '直伤技攻',
    type: 'top',
    from: '森林之魔女上衣',
    damageValue: 1186,
    skillAtk: [3, 4],
  },
  {
    name: '魔女专属攻强',
    type: 'top',
    from: '森林之魔女上衣',
    damageValue: 1186 + 264 * 10,
  },
  {
    name: '低血技攻',
    type: 'top',
    from: '恩特精灵胸甲',
    damageValue: 741,
    skillAtk: [8],
  },
  {
    name: '低血攻强速度',
    type: 'top',
    from: '恩特精灵胸甲',
    damageValue: 1186 + 852 * 4,
    speed: 6 * 4,
  },
  {
    name: '80 技攻 95 CD',
    prefix: '80 级技能 30% 占比，95 级技能 9% 占比',
    type: 'top',
    from: '恩特精灵胸甲',
    skillAtk: [20 * 0.3],
    coldDownReduce: -0.3 * 0.09,
    damageValue: 1334,
    other: '按 CP 武器鹦鹉未穿戴特化装备时计算，穿戴后特化技能占比会增加',
  },
  {
    name: '80 技攻 80 CD',
    prefix: '80 级技能 30% 占比',
    type: 'top',
    from: '恩特精灵胸甲',
    skillAtk: [20 * 0.3],
    coldDownReduce: -0.3 * 0.3,
    damageValue: 1334,
    other: '按 CP 武器鹦鹉未穿戴特化装备时计算，穿戴后特化技能占比会增加',
  },
  {
    name: '30% 出血伤害',
    type: 'top',
    from: '蓝灵绿玉石胸甲',
    damageValue: 148,
    abnormal: {
      type: 'bleed',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.3,
    },
  },
  {
    name: '30% 感电伤害',
    type: 'top',
    from: '蓝灵绿玉石胸甲',
    damageValue: 148,
    abnormal: {
      type: 'shock',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.3,
    },
  },
  {
    name: '30% 灼烧伤害',
    type: 'top',
    from: '蓝灵绿玉石胸甲',
    damageValue: 148,
    abnormal: {
      type: 'burn',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.3,
    },
  },
  {
    name: '30% 中毒伤害',
    type: 'top',
    from: '蓝灵绿玉石胸甲',
    damageValue: 148,
    abnormal: {
      type: 'posion',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.3,
    },
  },
  {
    name: '30% 中毒伤害',
    prefix: '毒王',
    type: 'top',
    from: '蓝灵绿玉石胸甲',
    damageValue: 148,
    abnormal: {
      type: 'posion',
      prevConversionRate: 0.74,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.3,
    },
  },
  {
    name: '80 ~ 95 + 3',
    prefix: '80 级技能 10% 占比，95 级技能 10% 占比',
    type: 'top',
    from: '蓝灵绿玉石胸甲',
    damageValue: 296,
    skillAtk: [9 * 0.1, 9 * 0.1],
    other: '按 80 级 和 95 级技能占比 10% 计算（剑魂）',
  },
  {
    name: '80 ~ 95 + 3',
    prefix: '80 级技能 30% 占比，95 级技能 10% 占比',
    type: 'top',
    from: '蓝灵绿玉石胸甲',
    damageValue: 296,
    skillAtk: [2.7, 9 * 0.1],
    other: '按 80 级 30% 占比，95 级技能 10% 占比计算（CP 鹦鹉）',
  },
  {
    name: '蓝灵专属攻强',
    type: 'top',
    from: '蓝灵绿玉石胸甲',
    damageValue: 1186 + 111 * 20,
  },
  {
    name: '6% 技攻',
    type: 'top',
    from: '深潜迷航胸甲',
    damageValue: 889,
    skillAtk: [6],
  },
  {
    name: '95% CD',
    prefix: '10% 占比',
    type: 'top',
    from: '深潜迷航胸甲',
    coldDownReduce: 0.02,
    damageValue: 1186,
    other: '按 95 技能 10% 占比计算',
  },
  {
    name: '三觉 10% 技攻',
    prefix: '12% 占比',
    type: 'top',
    from: '深潜迷航胸甲',
    damageValue: 1186,
    skillAtk: [10 * 0.12],
    other: '按三觉 12% 占比计算（40秒）',
  },
  {
    name: '二觉 10% 技攻',
    prefix: '6% 占比',
    type: 'top',
    from: '深潜迷航胸甲',
    damageValue: 1186,
    skillAtk: [10 * 0.06],
    other: '按二觉 6% 占比计算（40秒）',
  },
  {
    name: '95 20% 技攻',
    prefix: '10% 占比',
    type: 'top',
    from: '深潜迷航胸甲',
    damageValue: 1186,
    skillAtk: [20 * 0.1],
    other: '按 95 技能 10% 占比计算',
  },
  {
    name: '95 +1',
    prefix: '10% 占比',
    type: 'top',
    from: '深潜迷航胸甲',
    damageValue: 1186,
    skillAtk: [0.3],
    other: '按 95 技能 10% 占比计算',
  },
]
