// 百分比攻击强化 70%，全 80 级词条攻击强化 429226，换算为 1 级为 150606
// 无贴膜全 80 词条攻击强化 329030，换算为 1 级为 115499，平均每件装备攻强 9620
// 攻强分母为 150606 - 9620 = 140986，同时计算攻强时需要考虑百分比攻强
export const ATTACK_ENHANCE_MIX = 415000
export const ATTACK_ENHANCE_ARG = 140986
export const ELEMENT_ENHANCEMENT = 383

// 普通年宠 + 普通年套称号 + 国庆光环 + 红色宠物装备 + 夏日勋章
export const ATTACK_ENHANCE_PER = 1 + 0.25 + 0.2 + 0.07 + 0.08 + 0.1
