import React from 'react'
import validate from '../../validation/ValidateFunction'
import { Link } from 'react-router-dom'
import MyInput from './input'
import Button from './button'
// import { TestComponent, TestComponent2 } from '../../test.js'

class SignUp extends React.Component {
  constructor () {
    super()
    this.state = {
      fields: {
        email: '',
        password: '',
        retypePassword: ''
      },
      error: {
        email: '',
        password: ''
      },
      clicked: false
    }
    // this.handleClick = this.handleClick.bind(this)
  }

  handleChange (key, value) {
    console.log('####', key, value)
    this.setState({ ...this.state, fields: { ...this.state.fields, [key]: value } })
  }
  render () {
    console.log(this.state)
    return (
      <div className='container'>
        <div className='inputContainer'>
          <MyInput
            name='email'
            placeholder='email'
            error='bhvfhn'
            lable='email'
            myOnChange={(key, value) => this.handleChange(key, value)}
          />
          <MyInput
            type='password'
            name='password'
            placeholder='password'
            value={this.state.password}
            myOnChange={(key, value) => this.handleChange(key, value)}
          />

          <MyInput
            type='password'
            name='retypePassword'
            placeholder='confirm password'
            value={this.state.retypePassword}
            myOnChange={(key, value) => this.handleChange(key, value)}
          />
          <Button className='sav-btn' lable='Sign Up' />

        </div>
      </div>
    )
  }
}

export default SignUp
