import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('filterStore')

@observer class Link extends Component {

  handleClick = () => {
    const { type, filterStore } = this.props
    filterStore.filterTodo(type)
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.props.children}</button>
    )
  }

}

export default Link

