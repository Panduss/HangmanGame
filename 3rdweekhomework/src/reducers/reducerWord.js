import WordList from '../lib/words'

export default (state = [], { type, payload } = {}) => {
  console.log(WordList[Math.floor(Math.random() * WordList.length)])
  return state;
}
