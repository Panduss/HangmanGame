export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'


export function newGame() {
  return {
    type: NEW_GAME,
  }
}

export function makeGuess(inputArray) {
  return {
    type: MAKE_GUESS,
    payload: inputArray
  }
}
