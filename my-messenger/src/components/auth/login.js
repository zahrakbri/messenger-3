import React from 'react'
import logo from '../../logo.svg'
import validate from '../../validation/ValidateFunction'
// import { TestComponent, TestComponent2 } from '../../test.js'

class Login extends React.Component {
  constructor () {
    super ()
    this.state = {
      username: '',
      password: '',
      clicked: false,
      username_error: null
    }
    // this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({clicked: !this.state.clicked})
  }

  handleValidation () {
    let error = validate('username', this.state.username)
    console.log('error:::', error)
    this.setState({username_error: error})
  }

  render () {
    console.log('state:::', this.state)
    return (
      <div className='container'>
        <div className='inputContainer'>
          <img src={logo} width='100px'
            style={
              {
                alignSelf: 'center',
                marginBottom: '1px'
              }
            }
          />
          <input
            name='username'
            onChange={(event) => this.setState({username: event.target.value})}
            onBlur={() => this.handleValidation()}
          />
          {this.state.username_error !== null && this.state.username !== 'zzz' &&
            <p style={{color: 'red'}}>{this.state.username_error}</p>
          }
          <input
            type='password'
            value={this.state.password}
            onChange={(e) => this.setState({password: e.target.value})}
          />
          <button
            onClick={() => this.handleClick()}
            onMouseOver={() => console.log('4444')}
            style={{ backgroundColor: this.state.clicked ? 'lightblue' : '#fff'}}
          > login </button>
        </div>
      </div>
    )
  }
}

export default Login