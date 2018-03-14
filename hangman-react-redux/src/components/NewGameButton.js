import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NewGame } from '../actions/game'
import { randomWord, gameFinished } from '../lib/game'
import './NewGameButton.css'

class NewGameButton extends PureComponent {
  static propTypes = {
    NewGame: PropTypes.func.isRequired,
    word: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  handleOnClick = () => {
    this.props.NewGame(randomWord())
  }

  render() {
    const { word, guesses } = this.props

    if (!gameFinished(word, guesses)) return null

    return (
      <button className="New-Game" onClick={this.handleOnClick}>New Game</button>
    )
  }
}

const mapStateToProps = ({ word, guesses }) => ({ word, guesses })
export default connect(mapStateToProps, { NewGame })(NewGameButton)
