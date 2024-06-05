import { CHANGE_SERVICE_FIELD, CLEAR_FORM, SET_FORM_VALUES } from '../actions';

const initialState = {
  id: 0,
  name: '',
  price: 0,
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      };
    case SET_FORM_VALUES:
      return action.payload;
    case CLEAR_FORM:
      return initialState;
    default:
      return state;
  }
}