import WordList from '../lib/words'



const initialState = WordList[Math.floor(Math.random() * WordList.length)];

export default function(state = initialState, {type} ) {
  switch(type) {
    case 'NEW_GAME' :
      return WordList[Math.floor(Math.random() * WordList.length)];
    default :
      return state;
    }
  }
