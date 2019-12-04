import React from 'react'
import sendIcon from '../../send.png'
import { connect } from 'react-redux'
import { sendNewMessage } from '../../actions/conversation'

class Footer extends React.Component {
  constructor () {
    super()
    this.state = {
      newMessage: ''
    }
  }

  sendMessage () {
    this.props.dispatch(sendNewMessage(this.state.newMessage))
    this.setState({ newMessage: '' })
  }
  render () {
    return (
      <div className='footer'>
        <input
          className='new-message'
          value={this.state.newMessage}
          onChange={(e) => this.setState({ newMessage: e.target.value })}
        />
        <img
          width='40px'
          onClick={() => this.sendMessage()}
          src={sendIcon} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapDispatchToProps)(Footer)
