//this is where you can pull all your exports to
import React, { useState } from "react";
import "./App.css";
import Block from "./components/Block";
import Classcomponent from "./components/Classcomponent";
import Comments from "./components/Comments";
import Condition from "./components/Condition";
import Increment from "./components/Increment";

function App() {
  useState();

  const hello = "hello world";

  return (
    <>
      {/* <h1>hello</h1> */}
      {/* <h2>{hello}</h2> */}
      {/* <Block name={"john"} /> */}
      {/* <Block name={"jaden"} /> */}
      {/* <Block name={"fred"} /> */}
      {/* <Classcomponent name={"raul"} /> */}
      {/* <Increment /> */}
      {/* <Condition /> */}
      <Comments />
    </>
  );
}

export default App;
