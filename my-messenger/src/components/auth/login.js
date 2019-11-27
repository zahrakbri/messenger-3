import React from 'react'
import logo from '../../logo.svg'
import validate from '../../validation/ValidateFunction'
import { Link } from 'react-router-dom'
// import { TestComponent, TestComponent2 } from '../../test.js'

class Login extends React.Component {
  constructor () {
    super()
    this.state = {
      fields: {
        email: '',
        password: ''
      },
      error: {
        email: '',
        password: ''
      },
      clicked: false
    }
    // this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({ clicked: !this.state.clicked })
  }

  handleValidation (e) {
    let name = e.target.name
    let error = validate(name, this.state.fields[name])
    console.log('error:::', error)

    this.setState({ ...this.state, error: { ...this.state.error, [name]: error } })
  }

  handleChange (event) {
    // let fields = this.state.fields
    // fields['username'] = event.target.value
    // this.setState({fields})

    let name = event.target.name

    this.setState(
      { ...this.state, fields: { ...this.state.fields, [name]: event.target.value } },
      () => { console.log('####', this.state.fields.email) }
    )
    console.log(this.state.fields.email, event.target.value)
  }

  render () {
    console.log(this.state.fields.email)
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
            name='email'
            onChange={(event) => this.handleChange(event)}
            onBlur={(e) => this.handleValidation(e)}
          />
          {this.state.error.email !== null &&
            <p style={{ color: 'red' }}>{this.state.error.email}</p>
          }
          <input
            type='password'
            name='password'
            value={this.state.password}
            onChange={(e) => this.handleChange(e)}
            onBlur={(e) => this.handleValidation(e)}
          />
          {this.state.error.password !== null &&
            <p style={{ color: 'red' }}>{this.state.error.password}</p>
          }
          <button
            onClick={() => this.handleClick()}
            onMouseOver={() => console.log('4444')}
            style={{ backgroundColor: this.state.clicked ? 'lightblue' : '#fff' }}
          > <Link to='/messenger/'>Login</Link> </button>

        </div>
      </div>
    )
  }
}

export default Login
