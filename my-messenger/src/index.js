import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// const name = 'Hosna'
// const name2 = 'Fatemeh'
// const Element = <h1>Hello {name}</h1>

// function Element (props) {
//   console.log('111', props)
//   return (
//     <div>
//       <h1>Hello {props.name}</h1>
//       <p>welcome {props.name} {props.family}</p>
//     </div>
//   )
// }

// class Element2 extends React.Component {
//   render () {
//     console.log('222', this)
//     return (
//       <h1>Hello {this.props.name} </h1>
//     )
//   }
// }

// class Description extends React.Component {
//   render () {
//     return (
//       <div>
//         <Element2 name='Arefe' />
//         <p>Description ... </p>
//       </div>
//     )
//   }
// }

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
