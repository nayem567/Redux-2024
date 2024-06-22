import { createStore } from 'redux';
import '/style.css'

// defining const for using in Action - Return - Type 
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';

//! state
const initialCounterState = {
  count: 0,
}

const initialUsersState = {
  users: [
    { name: 'Mohaymenul Islam' }
  ]
}

//! action -> Object -> type, payload

// INCREMENT COUNTER

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

// DECREMENT COUNTER

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

// Payload

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: { name: user },
  };
};

// ! 1. State 
// ! 2. Dispatch Action
// ! 3. Reducer
// ! 4. Store - getState(), dispatch(), subscribe()

// ! tutorial 3 : redux | Reducers
// Create Reducer for Counter

const counterReducer = (state = initialCounterState, action) => {

  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }

    default:
      state;
  }
}

// ! tutorial 4 : redux | Store
// ! Store - getState(), dispatch(), subscribe()

//? Create Store
const store = createStore(counterReducer);

//? subscribe action
store.subscribe(() => {
  console.log(store.getState());
});

//? dispatch action
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());





