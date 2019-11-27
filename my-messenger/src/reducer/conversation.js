
const Init = {
  name: 'jjj',
  // newMessage: '',
  messageList: [
    {
      text: 'salam',
      id: 1
    }
  ]
}

export default function conversation (state = Init, action) {
  console.log('action:;;;',state, action)
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

    default:
      return state
  }
}