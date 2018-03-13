import React, { PureComponent } from 'react'
import { wrongGuessCount } from '../lib/game'

var stages = ['./images/Hangman-0.png',
'./images/Hangman-1.png',
'./images/Hangman-2.png',
'./images/Hangman-3.png',
'./images/Hangman-4.png',
'./images/Hangman-5.png',
'./images/Hangman-6.png']

class TheMan extends PureComponent {

  render() {
    return (
      <img className="TheMan" src={stages[wrongGuessCount/*(word, guesses)*/]} alt="hangman"></img>
    )
  }
}

export default TheMan
