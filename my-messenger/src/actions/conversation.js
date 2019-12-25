import axios from "axios";

export const saveUsername = (name) => ({
  type: 'SAVE_USERNAME',
  payload: name
})

export const sendNewMessage = (newMessage) => ({
  type: 'SEND_NEW_MESSAGE',
  payload: newMessage
})

export const editMessage = (text, index) => ({
  type: 'EDIT_MESSAGE',
  payload: text,
  index: index
})

export const getConversationList = (data) => ({
  type: 'GET_CONVERSATION_LIST',
  payload: data
})

export const getConversationListBegin = () => ({
  type: 'GET_CONVERSATION_LIST_BEGIN'
})

export const getConversationListSuccess = data => ({
  type: 'GET_CONVERSATION_LIST_SUCCESS',
  payload: data
});

export const getConversationListFailure = error => ({
  type: 'GET_CONVERSATION_LIST_FAILURE',
  payload: error
});

export function getConversationListThunk() {
  return dispatch => {
    dispatch(getConversationListBegin());
    return axios.get('http://click.7grid.ir/conversation/', {
      params: {
        token: localStorage.getItem('token')
      }
    })
    .then((response) => {
      console.log(response.data.data.conversation_details);
      dispatch(getConversationListSuccess(response.data.data.conversation_details))
    })
    .catch((error) => {
      if (error.response && error.response.status == 403) {
        window.localStorage.removeItem('token')
        window.location.replace('/')
      }
      console.log('eee:::',error.response);
      dispatch(getConversationListFailure(error.response))
    })
  };
}


