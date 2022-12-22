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
    other: '需要搭配睡眠流装备使用；每 20 秒使 20 秒内技能 CD -20%；-10% 睡眠抗性；1 个消耗品效果',
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
    other: '特效；20 光抗；使敌人感电',
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
    other: '特效；20 光抗；使敌人感电',
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
    other: '特效；20 光抗；使敌人感电；搭配混乱核心胸甲',
  },
  {
    name: '高科技战术腰带',
    type: '腰带',
    skillAttacks: [12, 5],
    attackEnhancement: 6414,
  },
  {
    name: '信念之喘息腰带',
    prefix: '2 个异常对象',
    type: '腰带',
    skillAttacks: [12, 7],
    attackEnhancement: 8484,
    elementEnhancement: 10,
    other: '自出血',
  },
  {
    name: '信念之喘息腰带',
    prefix: '5 个异常对象',
    type: '腰带',
    skillAttacks: [12, 7],
    attackEnhancement: 10620,
    elementEnhancement: 10,
    other: '自出血',
  },
  {
    name: '龙食腐者',
    type: '腰带',
    skillAttacks: [12],
    attackEnhancement: 7060,
    elementEnhancement: 20,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
    other: '15 全属抗',
  },
  {
    name: '天才技术大师的百宝腰带',
    type: '腰带',
    skillAttacks: [12],
    attackEnhancement: 11585,
    other: '100% 蓝耗；攻击回蓝',
  },
  {
    name: '应尽之责腰带',
    type: '腰带',
    skillAttacks: [12, 14],
    attackEnhancement: 3450,
    elementEnhancement: 20,
  },
  {
    name: '月落星沉腰带',
    type: '腰带',
    skillAttacks: [12, 10],
    attackEnhancement: 6794,
    elementEnhancement: 15,
    other: '-10 全属抗',
  },
  {
    name: '玉化亡灵腰带',
    type: '腰带',
    skillAttacks: [12],
    attackEnhancement: 6414,
  },
  {
    name: '动力之渊腰带',
    type: '腰带',
    skillAttacks: [12, 6],
    attackEnhancement: 6414,
    cd: 15,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
    other: '搭配低血流装备；攻击回血回蓝',
  },
  {
    name: '增援号令腰带',
    type: '腰带',
    skillAttacks: [12],
    attackEnhancement: 9605,
    cd: 20,
    other: '20% 技能范围',
  },
  {
    name: '永眠前的准备',
    prefix: '1 个异常对象',
    type: '腰带',
    skillAttacks: [12],
    attackEnhancement: 5240,
    abnormal: {
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,
      increasedConversionRate: 0,
      increasedAbnormalDamageEnhancement: 0.15,
    },
    other: '灼烧异常',
  },
  {
    name: '永眠前的准备',
    prefix: '2 个异常对象',
    type: '腰带',
    skillAttacks: [12],
    attackEnhancement: 5952,
    abnormal: {
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,
      increasedConversionRate: 0,
      increasedAbnormalDamageEnhancement: 0.15,
    },
    other: '灼烧异常',
  },
  {
    name: '永眠前的准备',
    prefix: '5 个异常对象',
    type: '腰带',
    skillAttacks: [12],
    attackEnhancement: 8088,
    abnormal: {
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,
      increasedConversionRate: 0,
      increasedAbnormalDamageEnhancement: 0.15,
    },
    other: '灼烧异常',
  },
  {
    name: '共度患难的承诺',
    type: '腰带',
    skillAttacks: [12, 6],
    attackEnhancement: 12872,
    elementEnhancement: 6,
    speed: 6,
    other: '按 1，2 词条吃满计算',
  },
  {
    name: '雕刻记忆的星座',
    type: '腰带',
    skillAttacks: [12, 16],
    attackEnhancement: 5228,
    other: '技攻按吃满计算',
  },
]
