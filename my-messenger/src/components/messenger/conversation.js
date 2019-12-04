import React from 'react'
import logo from '../../logo.svg'
import { connect } from 'react-redux'
import { saveUsername } from '../../actions/conversation'

class Conversation extends React.Component {
  render () {
    console.log('conv props:::', this.props)
    return (
      <div className='conversation' onClick={() => this.props.dispatch(saveUsername(this.props.name))}>
        <img src={logo} width='30px' />
        <div className='info'>
          <span>{this.props.name}</span>
          <span>salam</span>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapDispatchToProps)(Conversation)
