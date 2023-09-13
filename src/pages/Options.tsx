import { useState, useMemo, ChangeEvent } from 'react'
import { options, Option } from '@/data/options'
import { renderSkillAttack, renderSpeed } from './utils'

function Options() {
  const [type, setType] = useState<Option['type']>(
    (localStorage.getItem('options') as null | Option['type']) ?? 'public',
  )
  const filteredData = useMemo(() => options.filter(item => item.type === type), [type])
  function handleTypeChange(e: ChangeEvent<HTMLSelectElement>) {
    const newType = e.target.value as Option['type']
    setType(newType)
    localStorage.setItem('options', newType)
  }

  return (
    <div>
      <p>
        <select value={type} onChange={handleTypeChange}>
          <option value="public">公共</option>
          <option value="armor">防具</option>
          <option value="jewelry">首饰</option>
          <option value="special-equipment">特殊装备</option>
          <option value="top">上衣</option>
          <option value="bottom">下装</option>
          <option value="header-shoulder">头肩</option>
          <option value="belt">腰带</option>
          <option value="shoe">鞋</option>
          <option value="bracelet">手镯</option>
          <option value="necklace">项链</option>
          <option value="ring">戒指</option>
          <option value="sub-equipment">辅助装备</option>
          <option value="magic-stone">魔法石</option>
          <option value="earring">耳环</option>
        </select>
      </p>
      <table>
        <thead>
          <tr>
            <th>图标</th>
            <th>名称</th>
            <th>技攻</th>
            <th>攻强</th>
            <th>属强</th>
            <th>异常转化增加</th>
            <th>异常伤害增加</th>
            <th>速度</th>
            <th>冷却时间恢复</th>
            <th>冷却时间减少</th>
            <th>备注</th>
            <th>提升率</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.name + item.prefix + item.damageValue + item.other}>
              <td>
                <img className="icon" src={`/${item.from || 'logo'}.png`} alt={item.name} />
              </td>
              <td>
                {item.prefix ? `【${item.prefix}】` : ''}
                {item.name}
              </td>
              <td>{renderSkillAttack(item.skillAtk)}</td>
              <td>{item.damageValue}</td>
              <td>{item.elementalDamage}</td>
              <td>{item.abnormal?.convert && item.abnormal.convert + '%'}</td>
              <td>{item.abnormal?.abnormalDamage && item.abnormal.abnormalDamage + '%'}</td>
              <td>{renderSpeed(item.speed)}</td>
              <td>{item.cooldownRecovery && item.cooldownRecovery + '%'}</td>
              <td>{item.cooldownReduction && item.cooldownReduction + '%'}</td>
              <td>{item.other}</td>
              <td>{(((item.increaseRate as number) - 1) * 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Options
