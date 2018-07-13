export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'
export const GAME_OVER = 'GAME_OVER'


export function newGame() {
  return {
    type: NEW_GAME,
    payload: {gameOver: false}
  }
}

export function makeGuess(inputArray) {
  return {
    type: MAKE_GUESS,
    payload: inputArray
  }
}

export function finishGame() {
  return {
    type: GAME_OVER,
  }
}
