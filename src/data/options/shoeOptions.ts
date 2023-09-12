import { Option } from '.'

export const shoeOptions: Option[] = [
  {
    name: '空技能栏 12% 技攻',
    type: 'shoe',
    from: '恩特精灵战靴',
    damageValue: 296,
    skillAtk: [12],
  },
  {
    name: 'Lv70 20% 技攻，Lv70 加 30% CD',
    type: 'shoe',
    from: '恩特精灵战靴',
    damageValue: 296,
    skillAtk: [20 * 0.15],
    coolDownReduction: -0.3 * 0.15,
    other: '按女漫游 9 保压制射击 15% 占比计算',
  },
  {
    name: 'Lv70 20% 技攻，Lv75 加 30% CD',
    type: 'shoe',
    from: '恩特精灵战靴',
    damageValue: 296,
    skillAtk: [20 * 0.15],
    coolDownReduction: -0.3 * 0.07,
    other: '按女漫游 9 保压制射击 15% 和 7% 占比计算',
  },
  {
    name: 'Lv75 20% 技攻，Lv75 加 30% CD',
    type: 'shoe',
    from: '恩特精灵战靴',
    damageValue: 296,
    skillAtk: [5.6],
    coolDownReduction: -0.3 * 0.28,
    other: '按男气功深潜裤子雷切 28% 占比计算',
  },
  {
    name: 'Lv75 20% 技攻，Lv80 加 30% CD',
    type: 'shoe',
    from: '恩特精灵战靴',
    damageValue: 296,
    skillAtk: [5.6],
    coolDownReduction: -0.3 * 0.06,
    other: '按男气功深潜裤子雷切 28% 和 6% 占比计算',
  },
  {
    name: '25 属强',
    type: 'shoe',
    from: '深潜迷航长靴',
    damageValue: 593,
    elementalDamage: 25,
  },
]
