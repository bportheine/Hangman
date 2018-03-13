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

    if (isWinner(word, guesses)) return <div className="Message"><h2>We have a winner!</h2></div>
    if (wrongGuessLimit(word, guesses)) return <div className="Message"><h2>Sorry. The answer was: {word}.</h2></div>
    return null
  }

  render() {
    return this.renderMessage()
  }
}

const mapStateToProps = ({ word, guesses }) => ({ word, guesses })

export default connect(mapStateToProps)(Message)
