import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Counter() {
  const [count, setCount] = useState(0);


  useEffect(() => {

    console.log("count", count);

  }, [count]);

  function decrement() {
    setCount(count - 1);
  }

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>

      <Link to="/posts">Click here to go to posts</Link>
    </div>
  );
}

export default Counter;
