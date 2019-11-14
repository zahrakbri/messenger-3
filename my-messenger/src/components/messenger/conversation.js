import React from 'react'
import logo from '../../logo.svg'

export default class Conversation extends React.Component {
  render () {
    return (
      <div className='conversation'>
        <img src={logo} width='30px' />
        <div className='info'>
          <span>{this.props.name}</span>
          <span>salam</span>
        </div>
      </div>
    )
  }
}