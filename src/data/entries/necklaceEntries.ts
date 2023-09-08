import { Entry } from '.'

export const necklaceEntries: Entry[] = [
  {
    name: '10% 出血伤害',
    type: '项链',
    from: '森林之魔女项链',
    attackEnhancement: 296,
    abnormal: {
      type: '出血',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.5,
      increasedConversionRate: 0,
      increasedAbnormalDamageEnhancement: 0.1,
    },
    other: '按出血手蓝灵上衣计算',
  },
  {
    name: '韧性 Lv45 30% CDR',
    type: '项链',
    from: '森林之魔女项链',
    attackEnhancement: 1334,
    coldDownRecover: 0.165 * 0.3,
    other: '期望 16.5% CDR，按旅人特化恩特肩魔女裤子 Lv45 30% 占比计算',
  },
  {
    name: '35 属强',
    type: '项链',
    from: '恩特精灵项链',
    attackEnhancement: 445,
    elementEnhancement: 35,
  },
  {
    name: '自异常 Lv40 30% CDR',
    type: '项链',
    from: '蓝灵绿玉石项链',
    attackEnhancement: 1334,
    coldDownRecover: 0.3 * 0.2,
    other: '按男街霸恩特裤子霸王拳 20% 占比计算',
  },
  {
    name: '自异常 Lv70 30% CDR',
    type: '项链',
    from: '蓝灵绿玉石项链',
    attackEnhancement: 1334,
    coldDownRecover: 0.3 * 0.15,
    other: '按女漫游 9 保压制射击 15% 占比计算',
  },
  {
    name: '自异常 Lv40 30% CDR',
    type: '项链',
    from: '蓝灵绿玉石项链',
    attackEnhancement: 1334,
    coldDownRecover: 0.3 * 0.28,
    other: '按男气功深潜裤子雷切 28% 占比计算',
  },
  {
    name: '不前冲属强',
    type: '项链',
    from: '深潜迷航项链',
    attackEnhancement: 148,
    elementEnhancement: 6 * 5,
  },
  {
    name: '不前冲攻强',
    type: '项链',
    from: '深潜迷航项链',
    attackEnhancement: 1186 + 534 * 5,
  },
  {
    name: '10 无色攻强',
    type: '项链',
    from: '深潜迷航项链',
    attackEnhancement: 1334 + 1186,
  },
]