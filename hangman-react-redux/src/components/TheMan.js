import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { wrongGuessCount } from '../lib/game'
import './TheMan.css'

const stages = [
  './images/Hangman-0.png',
  './images/Hangman-1.png',
  './images/Hangman-2.png',
  './images/Hangman-3.png',
  './images/Hangman-4.png',
  './images/Hangman-5.png',
  './images/Hangman-6.png'
]

class TheMan extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  render() {
    const { word, guesses } = this.props

    return (
      <img className="TheMan" src={stages[wrongGuessCount( word, guesses)]} alt="hangman"/>
    )
  }
}

const mapStateToProps = ({ word, guesses }) => ({ word, guesses })
export default connect(mapStateToProps)(TheMan)
