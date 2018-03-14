import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isWinner, wrongGuessLimit } from '../lib/game'
import './Message.css'

class Message extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  renderMessage = () => {
    const { word, guesses } = this.props

    if (isWinner(word, guesses))
      return <h2 className="Message">You survived!</h2>
    if (wrongGuessLimit(word, guesses))
      return <h2 className="Message">You died. The answer was: {word}</h2>
    return null
  }

  render() {
    return this.renderMessage()
  }
}

const mapStateToProps = ({ word, guesses }) => ({ word, guesses })

export default connect(mapStateToProps)(Message)
