/**
 * 特殊文本组件
 */


export function CircleOrdinal({num}) {
  /**
   * 圆圈数字序号
   */
  return <span style={{
    border: '1px solid black',
    borderRadius: '50%',
    fontSize: 'inherit',
    width: '1.2em',
    height: '1.2em',
    marginRight: '0.3em',
    display: 'inline-flex', // 行内弹性盒子让元素垂直居中
    verticalAlign: 'middle',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  }}>{num}</span>
}