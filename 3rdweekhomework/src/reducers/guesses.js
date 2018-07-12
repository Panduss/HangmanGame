
export default (state = [], {type, payload} ) => {
  switch(type) {

    case 'MAKE_GUESS' :
      return state.concat(payload);

    case 'NEW_GAME' :
      return state = [];

    default :
      return state;
    }
}
