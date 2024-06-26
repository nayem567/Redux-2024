import { createStore, applyMiddleware } from 'redux';
import '/style.css'
import logger from 'redux-logger';


// redux logger - middleware


const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

const initialProductState = {
    products : ['sugar', 'salt'],
    numberOfProducts : 2
}

const getProducts = () =>{
    return{
        type: GET_PRODUCTS
    }
}

const addProduct = (product) =>{
    return{
        type: ADD_PRODUCT,
        payload: product
    }
}

const productReducer = (state = initialProductState, action) =>{
    switch(action.type){
        case GET_PRODUCTS:
            return{
                ...state
            }
        case ADD_PRODUCT:
            return{
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }
        default:
            return state
    }
}

const store = createStore(productReducer, applyMiddleware(logger));

store.subscribe(() =>{
    console.log(store.getState());
})

store.dispatch(getProducts());
store.dispatch(addProduct('apple'));








