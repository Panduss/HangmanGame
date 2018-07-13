import { GAME_OVER, NEW_GAME } from '../actions/game'

export default function (state = false, {type, payload} ) {
	switch(type) {
    
    case GAME_OVER:
      return true
    
    case NEW_GAME:
        return false;

    default :
      return state;
    }
}