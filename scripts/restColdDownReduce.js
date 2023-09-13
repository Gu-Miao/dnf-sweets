forestWitchSeries()
divSupport()

/**
 * 完美触发下魔女系列 CD 减少模拟
 */
function forestWitchSeries() {
  const skills = [
    // 出血攻速特工单 35 恩特裤子 9 保月步 Lv35 20% 占比
    { name: '特工 Lv35 月影秘步', cd: 12.2, cdr: 30 },
    // 攻速出血灵通肩恩特裤子双 40 特化碎灵屠戮 Lv40 21% 占比
    { name: '混沌魔灵 Lv40 碎灵屠戮', cd: 47.3, cdr: 22.5 + 15 + 25 },
    // 空血静谧双音双 45 恩特肩双 45 魔女裤子 Lv45 30% 占比
    { name: '旅人 Lv45 神雾兵仗：流星', cd: 6.5, cdr: 30 },
    // 空血静谧双音关羽 9 保长虹贯日 Lv60 13% 占比
    { name: '关羽 Lv60 长虹贯日', cd: 22.3, cdr: 30 },
    // 按攻速出血女漫游 40% CDR 模拟
    { name: '女漫游 Lv70 压制射击', cd: 42.6, cdr: 40 },
    // 空血静谧双音 CP 鹦鹉特化 40 秒 3 剜心，Lv80 43% 占比
    { name: '鹦鹉 Lv80 剜心', cd: 34.7, cdr: 12 + 22.5 + 30 },
    // 空血静谧双音制式鹦鹉灵通鞋 Lv95 11% 占比
    { name: '鹦鹉 Lv95 影缚追魂锁', cd: 51.3, cdr: 30 + 20 },
  ]
  const cd = 10

  console.log('=== 森林之魔女系列 ===')

  for (let i = 0; i < skills.length; i++) {
    const skill = skills[i]
    test(skill.name, skill.cd, skill.cdr, cd)
  }
}

/**
 * 深潜左槽破招减 CD 模拟
 * 以攻速出血 CP 无色冰晶女气功为例，念气波 3.2s，幻爆 6.7s，蛇波 8.3s
 * cdr 40%，小技能伤害占比 47%
 */
function divSupport() {
  const skills = [
    { name: '念气波', cd: 3.2 },
    { name: '幻影爆碎', cd: 6.7 },
    { name: '念兽螺旋波', cd: 8.3 },
  ]
  const cdr = 30
  const cd = 5

  let sum = 0

  console.log('=== 深潜左槽破招减 CD ===')

  for (let i = 0; i < skills.length; i++) {
    sum += test(skills[i].name, skills[i].cd, cdr, cd)[1]
  }

  const ave = sum / skills.length

  console.log(`小技能平均冷却减少：${(ave * 100).toFixed(2)}%`)
  console.log(`47% 伤害占比下收益：${((ave / 2) * 0.47 * 100).toFixed(2)}%`)
}

/**
 * 测试
 * @param {name} name 技能名
 * @param {number} total 技能总共 CD
 * @param {number} cdr 当前模板冷却时间恢复
 * @param {number} cd 触发装备特效的冷却
 * @returns {[number, number]} 平均减少的冷却时间，期望冷却时间减少
 */
function test(name, total, cdr, cd) {
  let reduced = 0

  // 第一次触发减 CD 时的剩余 CD
  for (let start = total; start > 0; start--) {
    let rest = start
    while (rest > 0) {
      const r = rest / 10
      reduced += r
      rest -= r + cd * (1 + cdr * 0.01)
    }
  }

  // 根据所有的情况求平均值
  const ave = reduced / total
  const coldDownReduce = ave / total

  console.log(`=== ${name} ===`)
  console.log(`冷却时间 ${total} 秒，CDR ${cdr}%，装备冷却 ${cd}秒`)
  console.log(`平均减少的冷却时间为：${ave.toFixed(2)} 秒`)
  console.log(`平均冷却减少：${(coldDownReduce * 100).toFixed(2)}%\n`)

  return [ave, coldDownReduce]
}
