import React from 'react'
import sendIcon from '../../send.png'
import HeaderContainer from '../../container/HeaderContainer'
import ChatScreen from './chatScreen';
import Footer from './footer';
import Header from './header'

export default class ChatBox extends React.Component {
  constructor () {
    super ()
    this.state = {
      newMessage: ''
    }

    this.getNewMessage = this.getNewMessage.bind(this)
  }

  getNewMessage (newMessage) {
    console.log('##', newMessage)
    this.setState({ newMessage })
  }

  render () {
    return (
      <div className='chat-box'>
        <HeaderContainer />
        <ChatScreen newMessage={this.state.newMessage} />
        <Footer getValue={this.getNewMessage} />
      </div>
    )
  }
}
