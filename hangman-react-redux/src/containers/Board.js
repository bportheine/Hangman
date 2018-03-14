import React, { PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Word from '../components/Word'
import Form from '../components/Form'
import Message from '../components/Message'
import TheMan from '../components/TheMan'
import NewGameButton from '../components/NewGameButton'
import './Board.css'

class Board extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  render() {
    return (
      <div className="Board">
        <TheMan />
        <Word />
        <Form />
        <Message />
        <NewGameButton />
      </div>
    )
  }
}

const mapStateToProps = ({ word, guesses }) => ({ word, guesses })

export default connect(mapStateToProps)(Board)
