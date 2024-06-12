import React, { useState } from 'react';
import './counter.styles.scss'

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div className="counter">
      <button className="counter-button" onClick={decrement}>-</button>
      <span className="counter-value">{count}</span>
      <button className="counter-button" onClick={increment}>+</button>
    </div>
  );
}