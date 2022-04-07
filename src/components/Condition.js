//this is how to make a conditional statement using useState hook
import React, { useState } from "react";

function Condition() {
  const [displayed, setDisplayed] = useState(false);
  console.log(displayed);

  return (
    <>
      <button onClick={() => setDisplayed(!displayed)}>Click me!</button>
      {displayed ? (
        <div className="style-one">Here I am!</div>
      ) : (
        <div className="style-two">Here I am!</div>
      )}
    </>
  );
}

export default Condition;
