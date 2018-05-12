import WordList from '../lib/words'

export default (state = WordList, { type, payload } = {}) => {
  console.log(state)
  return state
}
