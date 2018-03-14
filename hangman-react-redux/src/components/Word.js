import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showGuess, wrongGuessCount } from '../lib/game'
import './Word.css'

class Word extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  render() {
    const { word, guesses } = this.props
    return (
      <div className="Status">
        <h2>{ showGuess(word, guesses) }</h2>
        <h3>Wrong Guess Count: <span>{wrongGuessCount(word, guesses)}</span></h3>
        <h3>Guesses: <span>{guesses.join(", ")}</span></h3>
      </div>
    )
  }
}

const mapStateToProps = ({ word, guesses }) => ({ word, guesses })
export default connect(mapStateToProps)(Word)
