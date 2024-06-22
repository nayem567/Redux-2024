import { createStore } from 'redux';
import '/style.css'

// state - count : 0
// action - increment, decrement, reset
// reducer
// store

// ? CONSTANT declarations
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// ! 1. State

const initialCounterState = {
  count : 0
}

// ! 2. Action

const incrementCounter = () => {
  return {
    type: INCREMENT
  }
}

const decrementCounter = () => {
  return {
    type: DECREMENT
  }
}

const resetCounter = () => {
  return {
    type: RESET
  }
}

// ! 3. REDUCER - STATE, ACTION

const counterReducer = (state = initialCounterState, action) => {

  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };

    case RESET:
      return {
        ...state,
        count: 0
      };

    default:
      state;
  }

  return state;

}

// ! 4. STORE 
const store = createStore(counterReducer);

store.subscribe(() =>{
  console.log(store.getState())
});


// ! 5. Dispatch

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(resetCounter());




