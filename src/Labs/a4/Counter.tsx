import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0) //Defaults to 0.
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => { setCount(count + 1); console.log(count); }}>
        Up
      </button>
      <button
        onClick={() => { setCount(count - 1); console.log(count); }}>
        Down
      </button>
    </div>
  );
}
export default Counter;