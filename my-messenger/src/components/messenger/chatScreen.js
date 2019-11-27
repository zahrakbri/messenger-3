import React from 'react'
import { connect } from 'react-redux'
import { editMessage } from '../../actions/conversation'

class ChatScreen extends React.Component {
  constructor () {
    super()
    this.state = {
      editMode: false,
      id: -1,
    }
  }

  // componentDidUpdate () {
  //   console.log('propsss::1111111')
  // }

  editMessageFunction (e, index) {
    this.props.dispatch(editMessage(e.target.value, index))
    this.setState({editMode: this.state.editMode})
  }

  saveEdit (e) {
    if (e.key === 'Enter') {
      this.setState({editMode: false})
    }
  }
  render () {
    console.log('propsss::', this.props.messageList)
    return (
      <div className='chat-screen'>
        {this.props.messageList.map((message, index) => {
          if (this.state.editMode && this.state.id === index) {
            return (
              <input
                value={message.text}
                onChange={(e) => this.editMessageFunction(e, index)}
                onKeyPress={(e) => this.saveEdit(e)}
              />
            )
          } else {
            return (
              <p key={index}>
                {message.text}
                <sub onClick={() => this.setState({ editMode: true, id: index })}>
                  edit
                </sub>
              </p>
            )
          }
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  messageList: state.messageList
})

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen)
