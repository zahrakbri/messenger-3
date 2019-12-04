import Header from '../components/messenger/header'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  console.log('state:::::', state)
  return {
    name: state.name
  }
}

const HeaderContainer = connect(mapStateToProps)(Header)

export default HeaderContainer
