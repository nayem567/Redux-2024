import { combineReducers, createStore } from 'redux';
// import '/style.css'

// product - constant
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

// cart -  constant
const GET_CART_ITEMS = 'GET_CART_ITEMS';
const ADD_CART_ITEM = 'ADD_CART_ITEM';


// cart - initial state
const initialCartState = {
    cart: ['sugar'],
    numberOfProducts: 1
};

// products - initial state
const initialProductState = {
    products: ['sugar', 'salt'],
    numberOfProducts: 2
};

// products - actions
const getProducts = () =>{
    return{
        type: GET_PRODUCTS
    }
};

const addProduct = (product) =>{
    return{
        type: ADD_PRODUCT,
        payload: product
    }
}


// cart - actions
const getCart = () =>{
    return{
        type: GET_CART_ITEMS
    }
};

const addCart = (product) =>{
    return{
        type: ADD_CART_ITEM,
        payload: product
    }
}


// product Reducer

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
            return   state;
    }
}

// CART - Reducer

const cartReducer = (state = initialCartState, action) =>{

    switch(action.type){
        case GET_CART_ITEMS:
            return{
                ...state
            }
        case ADD_CART_ITEM:
            return{
                cart: [...state.cart, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }
        default:
          return  state;
    }
}

// root reducer
const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})

// store
 
// const store = createStore(productReducer);
const store = createStore(rootReducer);

store.subscribe(() =>{
    console.log(store.getState());
});

// dispatch


// store.dispatch(getProducts());
// store.dispatch(addProduct("pen"));

store.dispatch(getCart());
store.dispatch(addCart("pen"));





















































// ? Cart Reducer





