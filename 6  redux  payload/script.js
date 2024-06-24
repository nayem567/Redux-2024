

// ! 1. Declaring Constatnts
// ! 2. Initial State
// ! 3. Actions
// ! 4. Payload
// ! 5. Reducer
// ! 6. Store
// ! 7. Dispatch

import { createStore } from "redux";

// ? 1. Constants
const ADD_USER = 'ADD_USER';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';

// ? 2. State
const initialState = {
    users: ['Mohaymenul Islam'],
    count: 1
};

// ? 3. Actions

const addUser = (user) =>{
    return{
        type: ADD_USER,
        payload: user
    }
}

const incrementCount = (value) =>{
    return{
        type: INCREMENT_BY_VALUE,
        payload: value
    }
}

// ? 4. Reducer

const userReducer = (state = initialState, action) =>{

    switch (action.type) {
        case ADD_USER:
            return{
                users: [...state.users , action.payload],
                count: state.count + 1                
            }
        default:
            state;
    }
}

// ? STORE 
const store = createStore(userReducer);

store.subscribe(() =>{
    console.log(store.getState())
})


// ? Dispatch

store.dispatch(addUser('Nayem'));
store.dispatch(addUser('John'));


