import WordList from '../lib/words'

const initialState = WordList[Math.floor(Math.random() * WordList.length)];

export default function(state = initialState, action = {}) {
  switch(action.type) {
    case 'NEW_GAME' :
      return WordList[Math.floor(Math.random() * WordList.length)];
    default :
      return state;
    }
  }
