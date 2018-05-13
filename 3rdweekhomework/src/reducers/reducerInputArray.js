export default (state = '', action) => {
  switch(action.type) {
    case 'MAKE_GUESS' :
      return action.payload;
      case 'NEW_GAME' :
      return state = '';
    default :
      return state;
    }
}
