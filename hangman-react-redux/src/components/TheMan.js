import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { wrongGuessCount } from '../lib/game'

import hangman0 from './images/Hangman-0.png'
import hangman1 from './images/Hangman-1.png'
import hangman2 from './images/Hangman-2.png'
import hangman3 from './images/Hangman-3.png'
import hangman4 from './images/Hangman-4.png'
import hangman5 from './images/Hangman-5.png'
import hangman6 from './images/Hangman-6.png'

const stages = [hangman0,
  hangman1,
  hangman2,
  hangman3,
  hangman4,
  hangman5,
  hangman6]

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
