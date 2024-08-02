import { useState } from "react";

export const useCounter = (initValue) => {
  const [counter, setCounter] = useState((initValue = 1));
  const increment = (value = 1) => {
    setCounter(counter + value);
  };
  const decrement = (value = 1) => {
    if (counter <= 0) return;
    setCounter(counter - value);
  };
  const reset = () => {
    setCounter(initValue);
  };
  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
