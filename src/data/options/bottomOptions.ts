import { Option } from '.'

export const bottomOptions: Option[] = [
  {
    name: 'Lv45 -20% CD',
    type: 'bottom',
    from: '森林之魔女护腿',
    damageValue: 1186,
    coldDownReduce: 0.2 * 0.24,
    other: '按恩特肩特化 45 旅人 24% 占比计算',
  },
  {
    name: 'Lv35 -20% CD',
    type: 'bottom',
    from: '森林之魔女护腿',
    damageValue: 1186,
    coldDownReduce: 0.2 * 0.17,
    other: '按特工 9 保月步 17% 占比计算',
  },
  {
    name: 'Lv45 20% 技攻',
    type: 'bottom',
    from: '森林之魔女护腿',
    damageValue: 1186,
    skillAtk: [4.8],
    other: '按恩特肩特化 45 旅人 24% 占比计算',
  },
  {
    name: 'Lv35 20% 技攻',
    type: 'bottom',
    from: '森林之魔女护腿',
    damageValue: 1186,
    skillAtk: [3.4],
    other: '按特工 9 保月步 17% 占比计算',
  },
  {
    name: 'Lv45 +1',
    type: 'bottom',
    from: '森林之魔女护腿',
    damageValue: 1482,
    skillAtk: [0.48],
    other: '旅人 Lv45 +1 提升 2%，按恩特肩特化 Lv45 24% 占比计算',
  },
  {
    name: 'Lv35 +1',
    type: 'bottom',
    from: '森林之魔女护腿',
    damageValue: 1482,
    skillAtk: [0.306],
    other: '特工 Lv35 +1 提升 1.8%，按 9 保月步 17% 占比计算',
  },
  {
    name: '20% 出血伤害',
    type: 'bottom',
    from: '恩特精灵护腿',
    damageValue: 593,
    abnormal: {
      type: 'bleed',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 20,
    },
    other: '按佩戴出血手镯和蓝灵上衣计算',
  },
  {
    name: '20% 感电伤害',
    type: 'bottom',
    from: '恩特精灵护腿',
    damageValue: 593,
    abnormal: {
      type: 'shock',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 20,
    },
    other: '按佩戴感电手镯和蓝灵上衣计算',
  },
  {
    name: 'Lv35 20% 技攻，Lv35 +30% CD',
    type: 'bottom',
    from: '恩特精灵护腿',
    damageValue: 1134,
    skillAtk: [3.4],
    coldDownReduce: -0.3 * 0.17,
    other: '按特工 9 保月步 17% 占比计算',
  },
  {
    name: 'Lv35 20% 技攻，Lv40 +30% CD',
    type: 'bottom',
    from: '恩特精灵护腿',
    damageValue: 1134,
    skillAtk: [3.4],
    coldDownReduce: -0.3 * 0.04,
    other: '按特工 9 保月步 17% 和 4% 占比计算',
  },
  {
    name: 'Lv40 20% 技攻，Lv40 +30% CD',
    type: 'bottom',
    from: '恩特精灵护腿',
    damageValue: 1134,
    skillAtk: [5],
    coldDownReduce: -0.3 * 0.06,
    other: '按男街霸特化霸王拳 19% 和毒雷 6% 占比计算',
  },
  {
    name: 'Lv40 20% 技攻，Lv45 +30% CD',
    type: 'bottom',
    from: '恩特精灵护腿',
    damageValue: 1134,
    skillAtk: [5],
    coldDownReduce: -0.3 * 0.06,
    other: '按男街霸特化霸王拳 19%，毒雷 6%，45 6% 占比计算',
  },
  {
    name: 'Lv70~75 +3',
    type: 'bottom',
    from: '蓝灵绿玉石护腿',
    damageValue: 296,
    skillAtk: [4, 2.25],
    other: '按男气功风雷啸和 Lv70~75 25% 占比计算',
  },
  {
    name: '异抗 35 属强',
    type: 'bottom',
    from: '蓝灵绿玉石护腿',
    damageValue: 593,
    elementalDamage: 35,
  },
  {
    name: 'Lv80 20% CD',
    type: 'bottom',
    from: '深潜迷航长裤',
    damageValue: 1186,
    coldDownReduce: 0.2 * 0.3,
    other: '按鹦鹉双 80 特化剜心 30% 占比计算',
  },
  {
    name: 'Lv80 20% 技攻',
    type: 'bottom',
    from: '深潜迷航长裤',
    damageValue: 1186,
    skillAtk: [20 * 0.3],
    other: '按鹦鹉双 80 特化剜心 30% 占比计算',
  },
  {
    name: 'Lv80 +1',
    type: 'bottom',
    from: '深潜迷航长裤',
    damageValue: 1482,
    skillAtk: [3.35 * 0.3],
    other: '按鹦鹉双 80 特化剜心 30% 占比计算',
  },
  {
    name: 'Lv75 20% CD',
    type: 'bottom',
    from: '深潜迷航长裤',
    damageValue: 1186,
    coldDownReduce: 0.2 * 0.25,
    other: '按男气功 9 保雷切 25% 占比计算',
  },
  {
    name: 'Lv75 20% 技攻',
    type: 'bottom',
    from: '深潜迷航长裤',
    damageValue: 1186,
    skillAtk: [20 * 0.25],
    other: '按男气功 9 保雷切 25% 占比计算',
  },
  {
    name: 'Lv75 +1',
    type: 'bottom',
    from: '深潜迷航长裤',
    damageValue: 1482,
    skillAtk: [1.5, 3 * 0.25],
    other: '按男气功风雷啸和 9 保雷切 25% 占比计算',
  },
]
