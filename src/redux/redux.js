export function createStore(reducer) {
  let currentState;
  let currentLister = [];
  function getSatet() {
    return currentState;
  }
  function dispatch(action) {
    currentState = reducer(currentState, action);
    currentLister.forEach(v => v());
  }
  function subscribe(lister) {
    currentLister.push(lister);
  }
  dispatch({
    type: "INIT"
  });
  return {
    getSatet,
    subscribe,
    dispatch
  };
}

export function applyMiddleware(...middlewares) {
  return createStore => (...args) => {
    const store = createStore(...args);
    let dispatch = store.dispatch;
    return createStore => (...args) => {
      const store = createStore(...args);
      let dispatch = store.dispatch;
      // midApi 暴露, 以实现本体 createStore 基本功能
      const midApi = {
        getState: store.getState,
        dispatch: (...args) => dispatch(...args)
      };
      const middlewareChain = middlewares.map(middleware => {
        return middleware(midApi); // 执行中间件代码, 增强处理(处理异步, 特殊功能定制)
      });
      // 对每个中间件的传入 store.dispatch, 即中间件中的 next
      // 最终: middleware(midApi)(store.dispatch)(action)
      dispatch = compose(...middlewareChain)(store.dispatch);
      return {
        ...store,
        dispatch // 使用能力增强的 dispatch 覆盖掉原装 store 中的 dispatch
      };
    };
  };
}

export function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((ret, item) => (...arges) => {
    return ret(item(...arges));
  });
}

function bindActionCreator(creators, dispatch) {
  return (...arges) => dispatch(creators(...arges));
}

export function bindActionCreators(creators, dispatch) {
  return Object.keys(creators).reduce((ret, item) => {
    ret[item] = bindActionCreator(creators, dispatch);
    return ret;
  });
}
