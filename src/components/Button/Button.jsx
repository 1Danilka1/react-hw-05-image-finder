import React, { Component } from 'react'
import c from './Button.module.css'

export default class Button extends Component {
  render() {
    return (
      <div className={c.container}>
        <button type="button" onClick={this.props.onClick} className={c.button}>Load more</button>
      </div>
    )
  }
}
