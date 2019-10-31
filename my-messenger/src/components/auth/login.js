import React from 'react'
import logo from '../../logo.svg'
// import { TestComponent, TestComponent2 } from '../../test.js'

class Login extends React.Component {
  render () {
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
          <input />
          <input />
          <button> login </button>
        </div>
      </div>
    )
  }
}

export default Login