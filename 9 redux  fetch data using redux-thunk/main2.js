
import { applyMiddleware, createStore } from 'redux';
import '/style.css'
import { thunk } from 'redux-thunk';
import axios from 'axios';
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// ! 1. state
// ! 2. action
// ! 3. reducer
// ! 4. store

// ! constants
// ! axios - redux thunk

const GET_TODOS_REQUESET = 'GET_TODOS_REQUESET';
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
const GET_TODOS_FAILED = 'GET_TODOS_FAILED';


// ! 1. initial State

const initialTodosState = {
    todos: [],
    isLoading: false,
    error: null
}

// ! 2. Actions

const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUESET
    }
}

const getTodosSuccess = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos
    }
}

const getTodosFailed = (error) => {
    return {
        type: GET_TODOS_FAILED,
        payload: error
    }
}

// ! 3. Reducer

const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUESET:
            return {
                ...state,
                isLoading: true
            }
        case GET_TODOS_SUCCESS: {
            return {
                ...state,
                todos: action.payload,
                isLoading: false
            }
        }
        case GET_TODOS_FAILED: {
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        }
    }
}

// ! Axios - Fetch - Thunk
// Thunk Action Creator

const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodosRequest());
        axios.get(API_URL)
        .then((res) =>{
            const todos = res.data;
            const titles = todos.map(todo => todo.title);
            dispatch(getTodosSuccess(titles))
        })
        .catch((error) =>{
            const errorMessage = (error.message);
            dispatch(getTodosFailed(error));
        })
    }
}

// ! 4. Store

const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());
})

// ! 5. Dispatch

store.dispatch(fetchData());








































































