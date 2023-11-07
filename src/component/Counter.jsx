import React, { useReducer } from 'react';


const initialState = 0;


const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

function Counter() {

  const [count, dispatch] = useReducer(counterReducer, initialState);

  
  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };


  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };


  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Counter;