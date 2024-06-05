export const ADD_SERVICE = 'ADD_SERVICE';
export const UPDATE_SERVICE = 'UPDATE_SERVICE';
export const REMOVE_SERVICE = 'REMOVE_SERVICE';
export const SET_FILTER = 'SET_FILTER';
export const CHANGE_SERVICE_FIELD = 'CHANGE_SERVICE_FIELD';
export const SET_FORM_VALUES = 'SET_FORM_VALUES';
export const CLEAR_FORM = 'CLEAR_FORM';

export const addService = (name, price) => {
  return {
    type: ADD_SERVICE,
    payload: { name, price },
  };
};

export const updateService = (id, name, price) => {
  return {
    type: UPDATE_SERVICE,
    payload: { id, name, price },
  };
};

export const changeServiceField = (name, value) => {
  return {
    type: CHANGE_SERVICE_FIELD,
    payload: { name, value },
  };
};

export const setFormValues = (id, name, price) => {
  return {
    type: SET_FORM_VALUES,
    payload: { id, name, price },
  };
};

export const clearForm = () => {
  return {
    type: CLEAR_FORM,
  };
};

export const removeService = (id) => {
  return {
    type: REMOVE_SERVICE,
    payload: id,
  };
};

export const setFilter = (search) => {
  return {
    type: SET_FILTER,
    payload: search,
  };
};