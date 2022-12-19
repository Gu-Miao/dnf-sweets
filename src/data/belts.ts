import { Data } from '.'

export const belts: Data[] = [
  {
    name: '星灭光离腰带',
    type: '腰带',
    skillAttacks: [12, 7],
    attackEnhancement: 5336,
    cd: 15,
    speed: 45,
    other: '技攻 CD 需要 50% 血以上触发；火抗 +10；满三速需要 99 火抗',
  },
  {
    name: '白玉无邪腰带',
    type: '腰带',
    skillAttacks: [12, 3],
    attackEnhancement: 5604,
    other: '按 3% 技攻计算',
  },
  {
    name: '恐惧缠绕腰带',
    prefix: 'Lv1~30',
    type: '腰带',
    skillAttacks: [12, 12, 20],
    attackEnhancement: 4528,
    other: '按 24 无色消耗计算',
  },
  {
    name: '恐惧缠绕腰带',
    prefix: 'L30 以上技能',
    type: '腰带',
    skillAttacks: [12, 12],
    attackEnhancement: 4528,
    other: '按 24 无色消耗计算',
  },
  {
    name: '千丝萦绕腰带',
    type: '腰带',
    skillAttacks: [12, 20],
    attackEnhancement: 4917,
    other: '基础精通',
  },
  {
    name: '静谧的星光腰带',
    type: '腰带',
    skillAttacks: [12, 8],
    attackEnhancement: 10589,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
      moveSpeed: 8,
    },
    other: '不能持续前冲',
  },
  {
    name: '御雷腰带',
    prefix: '1 个异常对象',
    type: '腰带',
    skillAttacks: [12, 7],
    attackEnhancement: 7867,
    elementEnhancement: 15,
    other: '使敌人感电',
  },
  {
    name: '御雷腰带',
    prefix: '2 个异常对象',
    type: '腰带',
    skillAttacks: [12, 7],
    attackEnhancement: 8579,
    elementEnhancement: 15,
    other: '使敌人感电；搭配自异常',
  },
  {
    name: '御雷腰带',
    prefix: '5 个异常对象',
    type: '腰带',
    skillAttacks: [12, 7],
    attackEnhancement: 10715,
    elementEnhancement: 15,
    other: '使敌人感电；搭配混乱核心胸甲',
  },
  {
    name: '音律的夙愿',
    type: '腰带',
    skillAttacks: [12, 2],
    attackEnhancement: 9378,
    other: '需要搭配睡眠流装备使用；每 20 秒使 20 秒内技能 CD -20%；-10% 睡眠抗性；需要消耗品效果',
  },
  {
    name: '骄傲的意志腰带',
    prefix: '1 个异常对象',
    type: '腰带',
    skillAttacks: [12],
    attackEnhancement: 10090,
    abnormal: {
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,
      increasedConversionRate: 0,
      increasedAbnormalDamageEnhancement: 0.15,
    },
    other: '使敌人感电；感电异常；10% 感电抗性',
  },
  {
    name: '骄傲的意志腰带',
    prefix: '2 个异常对象',
    type: '腰带',
    skillAttacks: [12],
    attackEnhancement: 10802,
    abnormal: {
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,
      increasedConversionRate: 0,
      increasedAbnormalDamageEnhancement: 0.15,
    },
    other: '使敌人感电；感电异常；10% 感电抗性；搭配自异常',
  },
  {
    name: '骄傲的意志腰带',
    prefix: '5 个异常对象',
    type: '腰带',
    skillAttacks: [12],
    attackEnhancement: 12938,
    abnormal: {
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,
      increasedConversionRate: 0,
      increasedAbnormalDamageEnhancement: 0.15,
    },
    other: '使敌人感电；感电异常；10% 感电抗性；搭配混乱核心胸甲',
  },
  {
    name: '大地之翼腰带',
    type: '腰带',
    skillAttacks: [12, 8],
    attackEnhancement: 6414,
    elementEnhancement: 20,
  },
  {
    name: '亘古的悬空石腰带',
    prefix: '1 个中毒对象',
    type: '腰带',
    skillAttacks: [12],
    attackEnhancement: 7030,
    elementEnhancement: 10,
    cd: 25,
    other: '自中毒；-10% 全异抗',
  },
  {
    name: '亘古的悬空石腰带',
    prefix: '2 个中毒对象',
    type: '腰带',
    skillAttacks: [12],
    attackEnhancement: 7742,
    elementEnhancement: 10,
    cd: 25,
    other: '自中毒；-10% 全异抗',
  },
  {
    name: '亘古的悬空石腰带',
    prefix: '5 个中毒对象',
    type: '腰带',
    skillAttacks: [12],
    attackEnhancement: 9878,
    elementEnhancement: 10,
    cd: 25,
    other: '自中毒；-10% 全异抗；搭配混乱核心胸甲',
  },
  {
    name: '纯粹的自然秩序',
    prefix: '1 个异常对象',
    type: '腰带',
    skillAttacks: [12, 2],
    attackEnhancement: 7126,
    elementEnhancement: 15,
    speed: {
      attackSpeed: 10,
      castingSpeed: 15,
    },
    other: '物体；20 光抗；使敌人感电',
  },
  {
    name: '纯粹的自然秩序',
    prefix: '2 个异常对象',
    type: '腰带',
    skillAttacks: [12, 2],
    attackEnhancement: 7838,
    elementEnhancement: 15,
    speed: {
      attackSpeed: 10,
      castingSpeed: 15,
    },
    other: '物体；20 光抗；使敌人感电',
  },
  {
    name: '纯粹的自然秩序',
    prefix: '5 个异常对象',
    type: '腰带',
    skillAttacks: [12, 2],
    attackEnhancement: 9974,
    elementEnhancement: 15,
    speed: {
      attackSpeed: 10,
      castingSpeed: 15,
    },
    other: '物体；20 光抗；使敌人感电；搭配混乱核心胸甲',
  },
]
