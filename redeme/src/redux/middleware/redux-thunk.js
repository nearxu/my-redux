/**
 * 处理异步 action 中间件实现
 */
// next 下一个中间件, 其实就是传进来的 store.dispatch
const thunk = ({ dispatch, getState }) => next => action => {
	// 如果是函数, 那么把 dispatch 的能力交给函数内部处理, 通常用来处理异步
	if (typeof action === 'function') {
		return action(dispatch, getState)
	}
	// 不是函数, 那么直接 dispatch
	return next(action)
}

export default thunk