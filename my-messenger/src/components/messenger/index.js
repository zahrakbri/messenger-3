import React from 'react'
import ConversationList from './conversationList'
import ChatBox from './chatBox'

export default class Messenger extends React.Component {
  render () {
    return (
      <div className='messenger'>
        <ConversationList />
        <ChatBox />
      </div>
    )
  }
}
