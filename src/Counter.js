import React, { useState } from "react";

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const restart = () => setCount(0)
  const switchSign = () => setCount(count * -1)

  return (
    <>
      <h1>
        Count: <h3 data-testid='count'>{count}</h3>
      </h1>
      

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={restart}>Restart</button>
      <button onClick={switchSign}>Switch Signs</button>
    </>
  );
}

export default Counter;
