import { GUESS, NEW_GAME } from './types'

export const guessLetter = (guess) => {
  return {
    type: GUESS,
    guess
  }
}

export const NewGame = (newWord) => {
  return {
    type: NEW_GAME,
    newWord
  }
}
