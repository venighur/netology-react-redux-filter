import { ADD_SERVICE, REMOVE_SERVICE, UPDATE_SERVICE } from '../actions';

const initialState = [
  { id: crypto.randomUUID(), name: 'Замена стекла', price: 21000 },
  { id: crypto.randomUUID(), name: 'Замена дисплея', price: 25000 },
];

function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const { name, price } = action.payload;
      return [
        ...state,
        { id: crypto.randomUUID(), name, price: Number(price) },
      ];
    case UPDATE_SERVICE:
      return state.map(service => {
        if (service.id === action.payload.id) {
          const { name, price } = action.payload;
          return { ...service, name, price: Number(price) };
        }
        return service;
      });
    case REMOVE_SERVICE:
      const id = action.payload;
      return state.filter(service => service.id !== id);
    default:
      return state;
  }
}

export default serviceListReducer;
