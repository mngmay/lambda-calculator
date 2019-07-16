import React, { useState } from "react";

//import any components needed

import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers); //pulling the numbers array into useState
  // console.log("numbers", { numberState });

  return (
    <div className="numberButtons">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numberState.map((number, index) => {
        return <NumberButton number={number} key={index} />; //index is an optional parameter to take care of React's "unique key" error
      })}
    </div>
  );
};

export default Numbers;
