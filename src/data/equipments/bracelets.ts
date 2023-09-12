import { Data } from '.'

export const bracelets: Data[] = [
  {
    name: '电弧爆源手镯',
    prefix: '未破韧',
    type: 'bracelet',
    damageValue: 4176 + 148 * 5,
  },
  {
    name: '电弧爆源手镯',
    prefix: '破韧',
    type: 'bracelet',
    damageValue: 4176 + 148 * 5,
    skillAtk: [10, 15],
  },
  {
    name: '第二个黑桃 - 权威',
    type: 'bracelet',
    damageValue: 4528,
    elementalDamage: 35,
    other: '按 35 属强附魔计算',
  },
  {
    name: '收获之手',
    type: 'bracelet',
    damageValue: 4528,
    skillAtk: [6],
    coolDownRecovery: 0.25,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '千里之音手镯',
    prefix: '15 ~ 30 级技能',
    type: 'bracelet',
    damageValue: 5066,
    skillAtk: [10, 10],
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '千里之音手镯',
    prefix: '无色',
    type: 'bracelet',
    damageValue: 5066,
    skillAtk: [-15],
    coolDownReduction: -0.1,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '流星飞电手镯',
    type: 'bracelet',
    damageValue: 3165,
    skillAtk: [2, 5],
    abnormal: {
      type: 'burn',
      convert: 50,
      abnormalDamage: 20,
    },
  },
  {
    name: '生命之力皮护腕',
    type: 'bracelet',
    damageValue: 3165,
    skillAtk: [2, 5],
    abnormal: {
      type: 'shock',
      convert: 50,
      abnormalDamage: 20,
    },
  },
  {
    name: '和谐之音手镯',
    type: 'bracelet',
    damageValue: 4528,
    skillAtk: [3 * 5],
    elementalDamage: 5 * 5,
  },
  {
    name: '迟钝的感知手镯',
    type: 'bracelet',
    damageValue: 5066,
    skillAtk: [14],
    elementalDamage: 3 * 10,
  },
  {
    name: '灿若繁星手镯',
    type: 'bracelet',
    damageValue: 6048,
    skillAtk: [4 * 4],
    elementalDamage: 5 * 4,
  },
  {
    name: '石巨人之核手镯',
    type: 'bracelet',
    damageValue: 3705,
    skillAtk: [2, 5],
    abnormal: {
      type: 'posion',
      convert: 50,
      abnormalDamage: 20,
    },
  },
  {
    name: '石巨人之核手镯',
    prefix: '毒王',
    type: 'bracelet',
    damageValue: 3705,
    skillAtk: [2, 5],
    abnormal: {
      type: 'posion',
      prevConvert: 48,
      convert: 50,
      abnormalDamage: 20,
    },
  },
  {
    name: '绿野的纯真手镯',
    prefix: '未破韧',
    type: 'bracelet',
    damageValue: 3906 + 148 * 5,
    skillAtk: [8],
  },
  {
    name: '绿野的纯真手镯',
    prefix: '破韧',
    type: 'bracelet',
    damageValue: 3906 + 148 * 5,
    skillAtk: [8, 5, 15],
  },
  {
    name: '无人机战术手镯',
    type: 'bracelet',
    damageValue: 5066 + 193 * 10,
    skillAtk: [10],
    elementalDamage: 20,
    coolDownReduction: 0.12,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '自由之缚手镯',
    prefix: '无色',
    type: 'bracelet',
    damageValue: 5416 + 4446,
    skillAtk: [10],
    elementalDamage: 3 * 5 + 15,
  },
  {
    name: '自由之缚手镯',
    prefix: '非无色',
    type: 'bracelet',
    damageValue: 5416 + 4446,
    elementalDamage: 3 * 5 + 15,
  },
  {
    name: '守护龙的庇护 - 慈悲',
    type: 'bracelet',
    damageValue: 5604,
    elementalDamage: 30,
  },
  {
    name: '重奏者',
    type: 'bracelet',
    damageValue: 3988,
    skillAtk: [2 * 6],
    coolDownRecovery: 0.3,
  },
  {
    name: '骑士的救赎',
    type: 'bracelet',
    damageValue: 6414 + 4446,
    speed: {
      moveSpeed: 20,
    },
  },
  {
    name: '电离掌控手镯',
    type: 'bracelet',
    damageValue: 4528 + 4446,
    elementalDamage: 20,
  },
  {
    name: '黑灵缠绕手镯',
    type: 'bracelet',
    damageValue: 3165,
    skillAtk: [2, 5],
    abnormal: {
      type: 'bleed',
      convert: 50,
      abnormalDamage: 20,
    },
  },
  {
    name: '魔力抑制手镯',
    type: 'bracelet',
    damageValue: 5604 + 2668,
    skillAtk: [15],
  },
  {
    name: '动力导航包',
    type: 'bracelet',
    damageValue: 5066 + 2816,
    skillAtk: [7],
    coolDownReduction: 0.15,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '永恒的心愿',
    type: 'bracelet',
    damageValue: 4972,
    skillAtk: [28],
  },
  {
    name: '暴龙王的支配 - 武力',
    type: 'bracelet',
    damageValue: 5066,
    skillAtk: [15],
    elementalDamage: 30,
  },
  {
    name: '如流岁月',
    type: 'bracelet',
    damageValue: 5874 + 1927,
    skillAtk: [14],
    elementalDamage: 15,
    speed: {
      moveSpeed: 8,
    },
  },
]
