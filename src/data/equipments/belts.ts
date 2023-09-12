import { Data } from '.'

export const belts: Data[] = [
  {
    name: '星灭光离腰带',
    type: 'belt',
    damageValue: 5336,
    skillAtk: [7],
    coldDownRecover: 0.15,
    speed: 45,
  },
  {
    name: '白玉无邪腰带',
    type: 'belt',
    damageValue: 5604,
    skillAtk: [3],
    other: '按 3% 技攻附魔计算',
  },
  {
    name: '恐惧缠绕腰带',
    prefix: '1 ~ 30 技能',
    type: 'belt',
    damageValue: 4528,
    skillAtk: [20, 12],
  },
  {
    name: '恐惧缠绕腰带',
    prefix: '30 级以上技能',
    type: 'belt',
    damageValue: 4528,
    skillAtk: [20],
  },
  {
    name: '千丝萦绕腰带',
    prefix: '非无色',
    type: 'belt',
    damageValue: 4917,
    skillAtk: [20],
  },
  {
    name: '千丝萦绕腰带',
    prefix: '无色',
    type: 'belt',
    damageValue: 4917,
    skillAtk: [-10],
  },
  {
    name: '静谧的星光腰带',
    type: 'belt',
    damageValue: 6144 + 889 * 5,
    skillAtk: [8],
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
      moveSpeed: 8,
    },
  },
  {
    name: '御雷腰带',
    prefix: '单异常对象',
    type: 'belt',
    damageValue: 6414 + 712 + 712,
    skillAtk: [7],
    elementalDamage: 15,
  },
  {
    name: '御雷腰带',
    prefix: '2 个异常对象',
    type: 'belt',
    damageValue: 6414 + 712 + 712 * 2,
    skillAtk: [7],
    elementalDamage: 15,
  },
  {
    name: '御雷腰带',
    prefix: '5 个异常对象',
    type: 'belt',
    damageValue: 6414 + 712 + 712 * 5,
    skillAtk: [7],
    elementalDamage: 15,
  },
  {
    name: '音律的夙愿',
    type: 'belt',
    damageValue: 6414 + 2964,
    skillAtk: [2],
    coldDownReduce: 0.1,
  },
  {
    name: '骄傲的意志腰带',
    prefix: '单异常对象',
    type: 'belt',
    damageValue: 6414 + 2964 + 712,
    abnormal: {
      type: 'shock',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.15,
    },
  },
  {
    name: '骄傲的意志腰带',
    prefix: '2 个异常对象',
    type: 'belt',
    damageValue: 6414 + 2964 + 712 * 2,
    abnormal: {
      type: 'shock',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.15,
    },
  },
  {
    name: '骄傲的意志腰带',
    prefix: '5 个异常对象',
    type: 'belt',
    damageValue: 6414 + 2964 + 712 * 5,
    abnormal: {
      type: 'shock',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.15,
    },
  },
  {
    name: '大地之翼腰带',
    type: 'belt',
    damageValue: 6144,
    skillAtk: [8],
    elementalDamage: 20,
  },
  {
    name: '亘古的悬空石腰带',
    prefix: '单异常对象',
    type: 'belt',
    damageValue: 6318 + 712,
    elementalDamage: 10,
    coldDownRecover: 0.25,
  },
  {
    name: '亘古的悬空石腰带',
    prefix: '2 个异常对象',
    type: 'belt',
    damageValue: 6318 + 712 * 2,
    elementalDamage: 10,
    coldDownRecover: 0.25,
  },
  {
    name: '亘古的悬空石腰带',
    prefix: '5 个异常对象',
    type: 'belt',
    damageValue: 6318 + 712 * 5,
    elementalDamage: 10,
    coldDownRecover: 0.25,
  },
  {
    name: '纯粹的自然秩序',
    prefix: '单异常对象',
    type: 'belt',
    damageValue: 6414 + 712,
    skillAtk: [2],
    elementalDamage: 15,
    speed: {
      attackSpeed: 10,
      castingSpeed: 15,
    },
  },
  {
    name: '纯粹的自然秩序',
    prefix: '2 个异常对象',
    type: 'belt',
    damageValue: 6414 + 712 * 2,
    skillAtk: [2],
    elementalDamage: 15,
    speed: {
      attackSpeed: 10,
      castingSpeed: 15,
    },
  },
  {
    name: '纯粹的自然秩序',
    prefix: '5 个异常对象',
    type: 'belt',
    damageValue: 6414 + 712 * 5,
    skillAtk: [2],
    elementalDamage: 15,
    speed: {
      attackSpeed: 10,
      castingSpeed: 15,
    },
  },
  {
    name: '高科技战术腰带',
    type: 'belt',
    damageValue: 6414,
    skillAtk: [5],
  },
  {
    name: '信念之喘息腰带',
    prefix: '2 个异常对象',
    type: 'belt',
    damageValue: 5874 + 1186 + 712 * 2,
    skillAtk: [7],
    elementalDamage: 10,
  },
  {
    name: '信念之喘息腰带',
    prefix: '5 个异常对象',
    type: 'belt',
    damageValue: 5874 + 1186 + 712 * 5,
    skillAtk: [7],
    elementalDamage: 10,
  },
  {
    name: '龙食腐者',
    type: 'belt',
    damageValue: 5874 + 1186,
    elementalDamage: 4 * 5,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '天才技术大师的百宝腰带',
    type: 'belt',
    damageValue: 4917 + 2223 + 889 * 5,
    elementalDamage: 24,
  },
  {
    name: '应尽之责腰带',
    type: 'belt',
    damageValue: 3450,
    skillAtk: [14],
    elementalDamage: 20,
  },
  {
    name: '月落星沉腰带',
    prefix: '未破韧',
    type: 'belt',
    damageValue: 5510,
    skillAtk: [10],
    elementalDamage: 15,
  },
  {
    name: '月落星沉腰带',
    prefix: '破韧',
    type: 'belt',
    damageValue: 5510 + 1284,
    skillAtk: [10],
    elementalDamage: 15,
  },
  {
    name: '月落星沉腰带',
    prefix: '破韧，3 个异常对象',
    type: 'belt',
    damageValue: 5510 + 1284 * 3,
    skillAtk: [10],
    elementalDamage: 15,
  },
  {
    name: '玉化亡灵腰带',
    type: 'belt',
    damageValue: 6414,
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '动力之渊腰带',
    type: 'belt',
    damageValue: 6414,
    skillAtk: [6],
    coldDownRecover: 0.15,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '增援号令腰带',
    type: 'belt',
    damageValue: 5604 + 4001,
    coldDownRecover: 0.2,
  },
  {
    name: '永眠前的准备',
    prefix: '单异常对象',
    type: 'belt',
    damageValue: 4528 + 712,
    abnormal: {
      type: 'burn',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.15,
    },
  },
  {
    name: '永眠前的准备',
    prefix: '2 个异常对象',
    type: 'belt',
    damageValue: 4528 + 712 * 2,
    abnormal: {
      type: 'burn',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.15,
    },
  },
  {
    name: '永眠前的准备',
    prefix: '5 个异常对象',
    type: 'belt',
    damageValue: 4528 + 712 * 5,
    abnormal: {
      type: 'burn',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.15,
    },
  },
  {
    name: '愈合伤痕的誓言',
    prefix: '单红皮',
    type: 'belt',
    damageValue: 6952 + 145 * 20,
    skillAtk: [6],
  },
  {
    name: '愈合伤痕的誓言',
    prefix: '2 个红皮',
    type: 'belt',
    damageValue: 6952 + 145 * 40,
    skillAtk: [6],
    elementalDamage: 6,
    speed: 6,
  },
  {
    name: '铭刻记忆之星辰',
    prefix: '32 秒以上冷却技能',
    type: 'belt',
    damageValue: 3450 + 1778,
    skillAtk: [16],
  },
  {
    name: '铭刻记忆之星辰',
    prefix: '28 秒以上冷却技能',
    type: 'belt',
    damageValue: 3450 + 1778,
    skillAtk: [14],
  },
  {
    name: '铭刻记忆之星辰',
    prefix: '24 秒以上冷却技能',
    type: 'belt',
    damageValue: 3450 + 1778,
    skillAtk: [12],
  },
]
