import React from 'react'
import Conversation from './conversation'
import axios from 'axios'
import { getConversationList } from '../../actions/conversation'
import { connect } from 'react-redux'

class ConversationList extends React.Component {
  constructor () {
    super()
    this.state = {
      suggestUsers: [],
      myId: localStorage.getItem('id')
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

  componentDidMount () {
    axios.get('http://click.7grid.ir/conversation/', {
      params: {
        token: localStorage.getItem('token')
      }
    })
    .then((response) => {
      console.log(response.data.data.conversation_details);
      this.props.dispatch(getConversationList(response.data.data.conversation_details))
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  createConversation(id) {
    var data = new FormData()
    data.append('token', window.localStorage.getItem('token'))
    data.append('user_id', id)

    axios.post('http://click.7grid.ir/conversation/',data)
      .then((response) => {
        console.log('res::', response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
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
              <p
                key={user.id}
                onClick={() => this.createConversation(user.id)}
              >{user.email}</p>
            )
          })
        }
        {
          this.props.conversationList.map((conv) => (
            conv.users.map((user) => {
              if(user.id != this.state.myId) {
                return (
                  <Conversation
                  unseen={conv.unseen_messages}
                  user={user} key={user.id} />
                )
              } else {
                return null
              }
            })
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  conversationList: state.conversationList
})

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(ConversationList)