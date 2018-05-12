import React, { PureComponent } from 'react'

export const showLines = (word, guesses) => {
  return currentWord.split('').map(letter => (word.indexOf(letter) < 0) ? "_" : letter).join(" ");
}
