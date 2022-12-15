import { data, Data } from '.'

export const pants: Data[] = [
  {
    name: '混沌之幕护腿',
    type: '下装',
    skillAttacks: [12, 6],
    attackEnhancement: 6846,
    other: '需要搭配低血手镯使用',
  },
  {
    name: '双云暗影长裤',
    prefix: '无被击',
    type: '下装',
    skillAttacks: [12],
    attackEnhancement: 3450,
    elementEnhancement: 45,
    other: '需要 30 光抗；限定光强',
  },
  {
    name: '双云暗影长裤',
    prefix: '被击',
    type: '下装',
    skillAttacks: [12],
    attackEnhancement: 3450,
    elementEnhancement: 65,
    other: '需要 30 光抗；限定光强',
  },
  {
    name: '苍龙闪影护腿',
    type: '下装',
    skillAttacks: [12],
    attackEnhancement: 6252,
    elementEnhancement: 20,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
    other: '15 全属抗',
  },
  {
    name: '机械装甲下装',
    prefix: '全身红 10',
    type: '下装',
    skillAttacks: [12, 4],
    attackEnhancement: 6708,
    elementEnhancement: 10,
    speed: 20,
  },
  {
    name: '机械装甲下装',
    prefix: '全身红 12',
    type: '下装',
    skillAttacks: [12, 4.8],
    attackEnhancement: 7252,
    elementEnhancement: 10,
    speed: 20,
  },
  {
    name: '战胜噩梦的胜利符',
    type: '下装',
    skillAttacks: [12],
    attackEnhancement: 7559,
    elementEnhancement: 20,
    other: '持续扣血',
  },
]