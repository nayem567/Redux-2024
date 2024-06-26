import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../store";
import { decrementCount, incrementCount, resetCount } from "../services/actions/counterAction";

const Counter = () => {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  const handleCountIncrement = () => {
    dispatch(incrementCount());
  };
  const handleCountDecrement = () => {
    dispatch(decrementCount());
  };
  const handleCountReset = () => {
    dispatch(resetCount());
  };

  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={handleCountIncrement}>Increment</button>
      <button onClick={handleCountDecrement}>Decrement</button>
      <button onClick={handleCountReset}>Reset</button>
    </>
  );
};

export default Counter;
