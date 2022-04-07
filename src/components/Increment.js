//this is how to make an increment/decrement button using useState hook
import React, { useState } from "react";

function Increment() {
  // const number = 0;
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>increment</h1>
      <h2>{number}</h2>
      <button onClick={() => setNumber(number + 1)}>add 1</button>
      <button onClick={() => setNumber(number - 1)}>subtract 1</button>
    </>
  );
}

export default Increment;
