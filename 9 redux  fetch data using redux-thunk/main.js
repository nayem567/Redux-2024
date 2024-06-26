import { applyMiddleware, createStore } from 'redux';
import '/style.css'
import { thunk } from 'redux-thunk';
import axios from 'axios';


// async actions - api calling 
// api url - https://jsonplaceholder.typicode.com/todos
// middleware - redux thunk
// axios api

// ? 1. constants
// ? 2. initial state
// ? 3. actions
// ? 4. reduce
// ? 5. store
// ? 6. dispatch
// ? 7. API Calling
// ? 8. API calling - axios

// ! 1. CONSTANTS ✅
const TODOS_REQUEST = 'TODOS_REQUEST';
const TODOS_SUCCESS = 'TODOS_SUCCESS';
const TODOS_FAILED = 'TODOS_FAILED';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// ! 2. INITIAL STATE ✅
const initialTodosState = {
    todos: [],
    isLoading: false,
    error: null
}

// ! 3. ACTIONS 

const todosRequest = () => {
    return {
        type: TODOS_REQUEST
    }
}

const todosSuccess = (todos) => {
    return {
        type: TODOS_SUCCESS,
        payload: todos
    }
}

const todosFailed = (error) => {
    return {
        type: TODOS_FAILED,
        payload: error
    }
}

// ! 7. API Calling Axios :
// ! Async Action

const fetchData = () => {
    return (dispatch) => {
        dispatch(todosRequest());
        axios.get(API_URL)
            .then(res => {
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
}

// ! 4. Reducer 

const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            }
        case TODOS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}

// ! 5. Store

const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());
});

// ! 6. Dispatch

store.dispatch(fetchData());


























