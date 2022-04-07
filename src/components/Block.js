//functional component

import React from "react";

function Block(props) {
  console.log(props.name);

  return <>Block {props.name}</>;
}

export default Block;
