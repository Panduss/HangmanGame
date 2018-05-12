import WordList from '../lib/words'

export default (state = WordList, { type, payload } = {}) => {
  return WordList[Math.floor(Math.random() * WordList.length)]
  return state;
}
