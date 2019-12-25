
const Init = {
  name: '',
  messageList: [],
  conversationList: [],
  loading: false,
  error: null
}

export default function conversation (state = Init, action) {
  console.log('action:;;;', state, action)
  switch (action.type) {
    case 'SAVE_USERNAME':
      return {
        ...state,
        name: action.payload
      }

    case 'SEND_NEW_MESSAGE':
      return {
        ...state,
        // newMessage: action.payload,
        messageList: [
          ...state.messageList,
          {
            text: action.payload,
            id: 1
          }
        ]
      }

    case 'EDIT_MESSAGE':
      let newMessageList = state.messageList
      newMessageList[action.index] = {
        id: 1,
        text: action.payload
      }
      return {
        ...state,
        messageList: newMessageList
      }

    case 'GET_CONVERSATION_LIST':
      return {
        ...state,
        conversationList: action.payload
      }

    case 'GET_CONVERSATION_LIST_BEGIN':
      return {
        ...state,
        loading: true,
        error: null
      }

    case 'GET_CONVERSATION_LIST_SUCCESS':
      return {
        ...state,
        conversationList: action.payload,
        loading: false
      }

    case 'GET_CONVERSATION_LIST_FAILURE':
      return {
        error: action.payload,
        loading: false
      }

    default:
      return state
  }
}
