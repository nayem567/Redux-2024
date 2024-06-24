import '/style.css'
import { createStore } from 'redux';

// 1. declaring constant
// 2. initial state
// 3. actions
// 4. reducer
// 5. store

// 1. constants

const ADD_USER = 'ADD_USER';

// initial state

const initialState = {
    users: ['mohaymenul islam', 'nayem'],
    count: 2
}

// action

const addUser = (user) =>{
    return{
        type: ADD_USER,
        payload: user
    }
}

// reducer

const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_USER:
            return{
                users: [...state.users, action.payload],
                count: state.count + 1
            }
        default:
            state
    }
}

// store

const store = createStore(userReducer);

store.subscribe(() => {
    console.log(store.getState());
})

// dispatch

store.dispatch(addUser('Pichu'));
store.dispatch(addUser('hadsf'));























