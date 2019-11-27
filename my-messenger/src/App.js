import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Login from './components/auth/login.js'
import Messenger from './components/messenger/index.js'
import SignUp from './components/auth/signup'
import { createStore } from 'redux'
import conversation from './reducer/conversation'
import { Provider } from 'react-redux'

const store = createStore(conversation)

function App () {
  return (
    <Provider store={store} >
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/signup/' component={SignUp} />
          <Route exact path='/messenger/' component={Messenger} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
