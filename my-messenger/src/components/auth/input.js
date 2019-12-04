import React from 'react'

export default class MyInput extends React.Component {
  render () {
    return (
      <>
        {this.props.lable &&
          <span>{this.props.lable}</span>}
        <input
          className='myinput'
          type={this.props.type}
          placeholder={this.props.placeholder}
          name={this.props.name}
          onChange={(e) => this.props.myOnChange(this.props.name, e.target.value)}
        />
        {this.props.error &&
          <p className='error'>{this.props.error}</p>}
      </>
    )
  }
}
