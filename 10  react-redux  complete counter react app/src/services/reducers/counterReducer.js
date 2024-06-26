import { DECREMENT_COUNT, INCREMENT_COUNT, RESET_COUNT } from "../constants/counterConstants";


// ? 2. State
const initialCounterState = {
    count: 0,
};

// ? 4. Reducer
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1
            };
        case RESET_COUNT:
            return {
                ...state,
                count: 0
            };
        default:
            return state
    }
};

export default counterReducer;