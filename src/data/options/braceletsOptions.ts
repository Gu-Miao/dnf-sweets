import { Option } from '.'

export const braceletsOptions: Option[] = [
  {
    name: '每名敌人 9 属强',
    type: 'bracelet',
    from: '森林之魔女手镯',
    damageValue: 148,
    elementalDamage: 9 * 2,
  },
  {
    name: '10% 中毒伤害',
    prefix: '毒王',
    type: 'bracelet',
    from: '森林之魔女手镯',
    damageValue: 296,
    abnormal: {
      type: 'posion',
      prevConversionRate: 0.48,
      prevAbnormalDamageEnhancement: 0.3,

      increasedAbnormalDamageEnhancement: 0.1,
    },
    other: 'bracelet位毒伤，仅有毒王可以使用，按 30% 毒伤计算',
  },
  {
    name: '每名队员攻强',
    type: 'bracelet',
    from: '恩特精灵手镯',
    damageValue: 1186 + 1112,
    other: '按 1 名队员计算',
  },
  {
    name: '自异常 Lv60 30% CDR',
    type: 'bracelet',
    from: '蓝灵绿玉石手镯',
    damageValue: 1334,
    coldDownRecover: 0.3 * 0.13,
    other: '按关羽 9 保长虹贯日 13% 占比计算',
  },
  {
    name: '自异常 Lv45 30% CDR',
    type: 'bracelet',
    from: '蓝灵绿玉石手镯',
    damageValue: 1334,
    coldDownRecover: 0.3 * 0.3,
    other: '按旅人特化恩特肩魔女裤子 Lv45 30% 占比计算',
  },
  {
    name: '自异常 Lv35 30% CDR',
    type: 'bracelet',
    from: '蓝灵绿玉石手镯',
    damageValue: 1334,
    coldDownRecover: 0.3 * 0.2,
    other: '按特工恩特裤子 9 保月步 20% 占比计算',
  },
  {
    name: '攻强减伤',
    prefix: '期望',
    type: 'bracelet',
    from: '深潜迷航腕表',
    damageValue: 1186 + (3409 + 2223) / 2,
  },
  {
    name: '攻强速度',
    prefix: '期望',
    type: 'bracelet',
    from: '深潜迷航腕表',
    damageValue: 1334 + (3409 + 2223) / 2,
  },
]
