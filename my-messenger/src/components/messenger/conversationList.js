import React from 'react'
import Conversation from './conversation'

export default class ConversationList extends React.Component {
  constructor () {
    super()
    this.state = {
      convList: [
        {
          name: 'Mahdi',
          latestMessage: 'Hi',
          id: '300'
        },
        {
          name: 'Mahyar',
          latestMessage: 'Hi',
          id: '100'
        },
        {
          name: 'Hamed',
          latestMessage: 'Hi',
          id: '5'
        },
        {
          name: 'Arsham',
          latestMessage: 'Hi',
          id: '250'
        },
        {
          name: 'Parisa',
          id: '2'
        }
      ]
    }
  }
  render () {
    return (
      <div className='conversation-list'>
        {
          this.state.convList.map((conv) => {
            return (
              <Conversation name={conv.name} key={conv.id} />
            )
          })
        }
      </div>
    )
  }
}
