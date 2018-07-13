import { GAME_OVER } from '../actions/game'

export default function (state = false, {type, payload} ) {
	switch(type) {
    
    case GAME_OVER:
      return true

    default :
      return state;
    }
}