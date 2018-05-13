export default (state = '', action) => {
  switch(action.type) {
    case 'MAKE_GUESS' :
      return action.payload;
    default :
      return state;
    }
}
