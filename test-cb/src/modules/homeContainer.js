import { connect } from 'react-redux'
import Home from './home'
import {toggleTodo} from '../actions'

const mapStateToProps = state => {
  return {
    componists: state.componists
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeContainer
