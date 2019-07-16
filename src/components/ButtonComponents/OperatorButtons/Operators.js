import React, { useState } from "react";

//import any components needed

import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);

  return (
    <div className="operatorButtons">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

      {/* Because operators is an array of objects, we have to access that part as object.char and object.value based on what's in the arrays */}
      {operatorState.map((operator, index) => {
        return (
          <OperatorButton
            operator={operator.char}
            value={operator.value}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Operators;
