import React from 'react'
import Conversation from './conversation'
import axios from 'axios'
import { getConversationListThunk } from '../../actions/conversation'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'

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
    this.props.dispatch(getConversationListThunk())
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
        console.log('eee:::',error.response);
      });
  }
  render () {
    if (this.props.loading) {
      return (
        <div className='conversation-list-skeleton'>
          <Skeleton count={10} height={50}/>
        </div>
      )
    } else {
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
}

const mapStateToProps = (state) => ({
  conversationList: state.conversationList,
  loading: state.loading,
  error: state.error
})

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ConversationList))