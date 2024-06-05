import { SET_FILTER } from '../actions';

const initialState = '';

function serviceSearchReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
}

export default serviceSearchReducer;
