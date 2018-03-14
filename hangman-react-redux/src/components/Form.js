import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { guessLetter } from '../actions/game'
import { gameFinished } from '../lib/game'
import './Form.css'

class Form extends PureComponent {
  static propTypes = {
    guessLetter: PropTypes.func.isRequired,
    word: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  handleSubmit = (x) => {
    const guess = x.target.value
    x.target.value = null
    const { guesses, guessLetter } = this.props
    const lowerGuess = guess.toLowerCase().replace(/[^a-z]/g, '')
    if (guesses.indexOf(lowerGuess) === -1 && lowerGuess !== "") guessLetter(lowerGuess)
  }

  render() {
    const { word, guesses } = this.props

    if(gameFinished(word, guesses)) return null

    let input
    return (
      <div className="Form">
        <form>
          <input type="text" maxLength="1" className="Form"  placeholder="letter" onChange={e => this.handleSubmit.bind(this)(e)} />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ word, guesses }) => ({ word, guesses })
export default connect(mapStateToProps, { guessLetter })(Form)
