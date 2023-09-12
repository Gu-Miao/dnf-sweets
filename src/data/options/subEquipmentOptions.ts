import { Option } from '.'

export const subEquipmentOptions: Option[] = [
  {
    name: '10% 感电伤害',
    type: 'sub-equipment',
    from: '森林之魔女篮子',
    damageValue: 296,
    abnormal: {
      type: 'shock',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 10,
    },
    other: '按佩戴感电手镯和蓝灵上衣计算',
  },
  {
    name: '减少 45 级技能剩余 CD',
    prefix: '50% 占比',
    type: 'sub-equipment',
    from: '森林之魔女篮子',
    damageValue: 1037,
    coolDownReduction: 0.0778 * 0.5,
    other:
      '按 45 级技能 45s 冷却，30% CDR 计算，期望冷却减少约为 7.7%，按 45 级技能 50% 占比计算。收益低，主要还是给奶用',
  },
  {
    name: '减少 60 级技能剩余 CD',
    prefix: '50% 占比',
    type: 'sub-equipment',
    from: '森林之魔女篮子',
    coolDownReduction: 0.0685 * 0.5,
    damageValue: 1037,
    other:
      '按 60 级技能 35s 冷却，30% CDR 计算，期望冷却减少约为 6.85%，按 60 级技能 50% 占比计算。收益低，主要还是给奶用',
  },
  {
    name: '减少 35 级技能剩余 CD',
    prefix: '50% 占比',
    type: 'sub-equipment',
    from: '森林之魔女篮子',
    damageValue: 1037,
    coolDownReduction: 0.0536 * 0.5,
    other:
      '按 35 级技能 15s 冷却，30% CDR 计算，期望冷却减少约为 5.36%，按 35 级技能 50% 占比计算。收益低，主要还是给奶用',
  },
  {
    name: '80 级技能韧性 CDR',
    prefix: '期望，50% 占比',
    type: 'sub-equipment',
    from: '森林之魔女篮子',
    damageValue: 1334,
    coolDownReduction: 0.165 * 0.5,
    other: '期望 16.5% CDR，按 80 级技能 50% 占比计算',
  },
  {
    name: '15% 出血伤害',
    type: 'sub-equipment',
    from: '恩特精灵圣杯',
    damageValue: 889,
    abnormal: {
      type: 'bleed',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 15,
    },
    other: '按佩戴出血手镯和蓝灵上衣计算',
  },
  {
    name: '低血 5 技攻',
    type: 'sub-equipment',
    from: '恩特精灵圣杯',
    damageValue: 1186,
    skillAtk: [5],
  },
  {
    name: '低血攻强',
    type: 'sub-equipment',
    from: '恩特精灵圣杯',
    damageValue: 1186 + 3112,
  },
  {
    name: '领主 20% 出血伤害',
    type: 'sub-equipment',
    from: '蓝灵绿玉石香水',
    damageValue: 296,
    abnormal: {
      type: 'bleed',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 20,
    },
    other: '按佩戴出血手镯和蓝灵上衣计算',
  },
  {
    name: '领主 20% 出血伤害',
    prefix: '期望',
    type: 'sub-equipment',
    from: '蓝灵绿玉石香水',
    damageValue: 296,
    abnormal: {
      type: 'bleed',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 20 * 0.667,
    },
    other: '按佩戴出血手镯和蓝灵上衣计算',
  },
  {
    name: '领主 35 属强',
    type: 'sub-equipment',
    from: '蓝灵绿玉石香水',
    damageValue: 741,
    elementalDamage: 35,
  },
  {
    name: '领主 35 属强',
    prefix: '期望',
    type: 'sub-equipment',
    from: '蓝灵绿玉石香水',
    damageValue: 741,
    elementalDamage: Math.ceil((35 * 2) / 3),
  },
  {
    name: '领主攻强',
    type: 'sub-equipment',
    from: '蓝灵绿玉石香水',
    damageValue: 1186 + 3853,
  },
  {
    name: '领主攻强',
    prefix: '期望',
    type: 'sub-equipment',
    from: '蓝灵绿玉石香水',
    damageValue: 1186 + Math.ceil((3853 * 2) / 3),
  },
  {
    name: '普通最后一击攻强',
    type: 'sub-equipment',
    from: '蓝灵绿玉石香水',
    damageValue: 1186 + 2371,
  },
  {
    name: '破招减小技能 CD',
    prefix: '30% 占比',
    type: 'sub-equipment',
    from: '深潜迷航脚蹼',
    damageValue: 1186,
    coolDownReduction: 0.0617 * 0.3,
    other: '按 CP 女气功计算，30% CDR 下冷却减少收益约为 6.17%，1 ~ 30 级技能按 30% 占比计算',
  },
  {
    name: '5% 出血伤害',
    type: 'sub-equipment',
    from: '深潜迷航脚蹼',
    damageValue: 1186,
    abnormal: {
      type: 'bleed',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 5,
    },
    other: '按佩戴出血手镯和蓝灵上衣计算',
  },
  {
    name: '5% 中毒伤害',
    type: 'sub-equipment',
    from: '深潜迷航脚蹼',
    damageValue: 1186,
    abnormal: {
      type: 'posion',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 5,
    },
    other: '按佩戴中毒手镯和蓝灵上衣计算',
  },
  {
    name: '5% 中毒伤害',
    prefix: '毒王',
    type: 'sub-equipment',
    from: '深潜迷航脚蹼',
    damageValue: 1186,
    abnormal: {
      type: 'posion',
      prevConvert: 74,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 5,
    },
    other: '按佩戴中毒手镯和蓝灵上衣计算',
  },
  {
    name: '韧性攻强',
    type: 'sub-equipment',
    from: '深潜迷航脚蹼',
    damageValue: 1186 + 193 * 10,
  },
]