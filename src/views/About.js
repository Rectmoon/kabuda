/**
 * 函数式组件特点：
      没有管理任何状态
      没有监听任何传递给它的状态
      没有生命周期方法
      它只是接收一些prop的函
  无状态 == 无响应式数据
  无实例 == 无this上下文
 */

export default {
  functional: true,

  render (h, ctx) {
    return (
      <div>
        <h1>{ctx.props.a}</h1>
        <h2>{ctx.props.b}</h2>
      </div>
    )
  }
}
