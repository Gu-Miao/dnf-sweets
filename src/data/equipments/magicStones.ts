import { Data } from '.'

export const magicStones: Data[] = [
  {
    name: '不败奖牌',
    type: 'magic-stone',
    damageValue: 5604 + 2964,
  },
  {
    name: '虚伪之石',
    type: 'magic-stone',
    damageValue: 3180,
    elementalDamage: 30,
    other: '按 30 属强附魔计算',
  },
  {
    name: '逆流之魂灵珠',
    type: 'magic-stone',
    damageValue: 4528 + 2519,
    skillAtk: [7],
    coldDownReduce: 0.08,
    speed: {
      attackSpeed: 15,
      castingSpeed: 15,
      moveSpeed: 23,
    },
  },
  {
    name: '静谧之像',
    prefix: '15 ~ 30 级技能',
    type: 'magic-stone',
    damageValue: 4676,
    skillAtk: [3 * 10],
    coldDownRecover: 0.01 * 10,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '未知的黄金石碑',
    type: 'magic-stone',
    damageValue: 4528,
    skillAtk: [2 * 4],
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '生机盎然的绿宝石',
    type: 'magic-stone',
    damageValue: 5604 + 2964,
  },
  {
    name: '炙热之情宝石',
    type: 'magic-stone',
    damageValue: 4796 + 4446,
    elementalDamage: 28,
  },
  {
    name: '灵动的慧眼',
    prefix: '4 个电池',
    type: 'magic-stone',
    damageValue: 5604 + 963 * 4,
    skillAtk: [1 * 4],
    elementalDamage: 15,
    speed: 5 * 4,
  },
  {
    name: '和平捍卫者',
    type: 'magic-stone',
    damageValue: 5604 + 2964,
    skillAtk: [4],
    elementalDamage: 20,
    speed: {
      attackSpeed: 20,
      castingSpeed: 30,
      moveSpeed: 20,
    },
  },
  {
    name: '未知文明 - 星石',
    type: 'magic-stone',
    damageValue: 5604 + 2964,
  },
  {
    name: '自然灵息露珠',
    type: 'magic-stone',
    damageValue: 5604 + 2964,
  },
  {
    name: '陆战型：战术车轮无人机',
    type: 'magic-stone',
    damageValue: 5066 + 2223,
    skillAtk: [2 * 5],
    speed: 10,
  },
  {
    name: '奔涌之息宝石',
    type: 'magic-stone',
    damageValue: 3894,
    coldDownRecover: 0.5,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '猎龙者之证 - 龙心加工石',
    type: 'magic-stone',
    damageValue: 4796,
    elementalDamage: 30,
  },
  {
    name: '迷你电池包',
    type: 'magic-stone',
    damageValue: 5066 + 504 * 5 + 2223,
    skillAtk: [5],
  },
  {
    name: '子夜的圣域',
    type: 'magic-stone',
    damageValue: 5066,
    skillAtk: [10],
    coldDownRecover: 0.12,
    speed: {
      attackSpeed: 10,
      castingSpeed: 15,
    },
  },
  {
    name: '多德卡全息图',
    type: 'magic-stone',
    damageValue: 5240 + 3853,
    coldDownRecover: 0.2,
  },
  {
    name: '诅咒之心',
    type: 'magic-stone',
    damageValue: 5066,
    skillAtk: [15],
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '吞噬黑暗的心脏',
    type: 'magic-stone',
    damageValue: 6144,
    speed: {
      attackSpeed: 15 + 15,
      castingSpeed: 20 + 20,
      moveSpeed: 15 + 15,
    },
  },
  {
    name: '完成型动力控制装置',
    type: 'magic-stone',
    damageValue: 3988 + 3705,
    elementalDamage: 10 * 4,
  },
  {
    name: '胜利约定之时',
    type: 'magic-stone',
    damageValue: 5604 + 445 * 10,
    skillAtk: [8],
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '终结之龙玉',
    type: 'magic-stone',
    damageValue: 5066 + 1778,
    skillAtk: [9],
  },
  {
    name: '忘却之记载',
    type: 'magic-stone',
    damageValue: 5336 + 1927 + 2668,
    skillAtk: [8],
  },
]
