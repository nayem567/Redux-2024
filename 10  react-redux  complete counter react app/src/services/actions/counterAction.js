import { INCREMENT_COUNT } from "../constants/counterConstants";
import { DECREMENT_COUNT } from "../constants/counterConstants";
import { RESET_COUNT } from "../constants/counterConstants";

// ? 3. Action
export const incrementCount = () => {
    return {
        type: INCREMENT_COUNT,
    };
};

export const decrementCount = () => {
    return {
        type: DECREMENT_COUNT,
    };
};

export const resetCount = () => {
    return {
        type: RESET_COUNT,
    };
};