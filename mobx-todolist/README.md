## mobx踩坑

react搭配mobx还是比redux要少写挺多代码的，而且是响应式的，感觉有点像vue。用到了装饰器

## how to use

首先和redux一样，mobx也提供了mobx-react将二者结合, 提供Provider容器组件，注入store

```
// index.js
...
ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

其次不同于redux，mobx不是单一store，而是针对每个模块都可以单独写一个store，而且一个store就是一个类，相关方法内聚在类里，感觉很优雅，具体代码不贴了

不同的store还可以互相通信，直接import即可获取相关数据

在组件中引入状态，如下所示

```
import { inject, observer } from 'mobx-react'

// 注解，表示用到哪个store
@inject('userStore')

// 将组件转换为观察者
@observer class User extends Component {
  ...
}

```

这样就能通过`this.props.userStore.xxx`来获取store里的状态和方法

## todo

autorun，observable.map({}) 的使用

## end

只是简单的初探了一下，项目里暂时也用不到，因为用的vue。。。估计以后写react也用的是redux，但是写些个人的东西还是不错滴

## reference

部分参考 https://github.com/rwieruch/favesound-mobx 的项目结构，这个项目的结构非常清晰。值得学习

