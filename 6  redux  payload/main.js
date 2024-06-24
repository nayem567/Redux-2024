import { createStore } from 'redux';
import '/style.css'

// ? CONSTANT declarations

const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
const ADD_USER = 'ADD_USER'

// ! 1. State

const initialCounterState = {
  users: ["Mohaymenul Islam"],
  count: 1
}

// ! 2. Action
const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  }
}

// ! payload
const incrementCounterByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value
  }
}

// ! 3. REDUCER - STATE, ACTION
const userReducer = (state = initialCounterState, action) => {

  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
        count: state.count + 1,
      }

    default:
      state;
  }

  return state;

}

// ! 4. STORE 
const store = createStore(userReducer);

store.subscribe(() => {
  console.log(store.getState())
});


// ! 5. Dispatch


store.dispatch(addUser('Motin'));
store.dispatch(addUser('Kalu'));




