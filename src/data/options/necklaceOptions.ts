import { Option } from '.'

export const necklaceOptions: Option[] = [
  {
    name: '10% 出血伤害',
    type: 'necklace',
    from: '森林之魔女项链',
    damageValue: 296,
    abnormal: {
      type: 'bleed',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.5,

      increasedAbnormalDamageEnhancement: 0.1,
    },
    other: '按出血手蓝灵top计算',
  },
  {
    name: '韧性 Lv45 30% CDR',
    type: 'necklace',
    from: '森林之魔女项链',
    damageValue: 1334,
    coldDownRecover: 0.165 * 0.3,
    other: '期望 16.5% CDR，按旅人特化恩特肩魔女裤子 Lv45 30% 占比计算',
  },
  {
    name: '35 属强',
    type: 'necklace',
    from: '恩特精灵项链',
    damageValue: 445,
    elementalDamage: 35,
  },
  {
    name: '自异常 Lv40 30% CDR',
    type: 'necklace',
    from: '蓝灵绿玉石项链',
    damageValue: 1334,
    coldDownRecover: 0.3 * 0.2,
    other: '按男街霸恩特裤子霸王拳 20% 占比计算',
  },
  {
    name: '自异常 Lv70 30% CDR',
    type: 'necklace',
    from: '蓝灵绿玉石项链',
    damageValue: 1334,
    coldDownRecover: 0.3 * 0.15,
    other: '按女漫游 9 保压制射击 15% 占比计算',
  },
  {
    name: '自异常 Lv40 30% CDR',
    type: 'necklace',
    from: '蓝灵绿玉石项链',
    damageValue: 1334,
    coldDownRecover: 0.3 * 0.28,
    other: '按男气功深潜裤子雷切 28% 占比计算',
  },
  {
    name: '不前冲属强',
    type: 'necklace',
    from: '深潜迷航项链',
    damageValue: 148,
    elementalDamage: 6 * 5,
  },
  {
    name: '不前冲攻强',
    type: 'necklace',
    from: '深潜迷航项链',
    damageValue: 1186 + 534 * 5,
  },
  {
    name: '10 无色攻强',
    type: 'necklace',
    from: '深潜迷航项链',
    damageValue: 1334 + 1186,
  },
]
