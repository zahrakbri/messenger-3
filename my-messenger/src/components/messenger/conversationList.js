import React from 'react'
import Conversation from './conversation'
import axios from 'axios'

export default class ConversationList extends React.Component {
  constructor () {
    super()
    this.state = {
      suggestUsers: [],
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

  handleSearch (e) {
    if (e) {
      var data = new FormData()
      data.append('token', window.localStorage.getItem('token'))
      data.append('query', e)
      data.append('size', 4)

      axios.post('http://click.7grid.ir/explore/search/contacts/',data)
        .then((response) => {
          this.setState({suggestUsers: response.data.data.users})
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  render () {
    return (
      <div className='conversation-list'>
        <input
          onChange={(e) => this.handleSearch(e.target.value)}
        />
        {
          this.state.suggestUsers.map((user) => {
            return (
              <p key={user.id}>{user.email}</p>
            )
          })
        }
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
