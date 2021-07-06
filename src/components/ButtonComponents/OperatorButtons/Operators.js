import React, { useState } from "react";

//import any components needed

import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

//Import your array data to from the provided data file

const Operators = props => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);
  const { addOperator } = props;

  return (
    <div className="operatorButtons">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

      {/* Because operators is an array of objects, we have to access that part as object.char and object.value based on what's in the arrays */}
      {operatorState.map(operator => {
        //index is an optional parameter to take care of React's "unique key" error
        return (
          <OperatorButton
            char={operator.char}
            value={operator.value}
            addOperator={addOperator}
            key={operator.char}
          />
        );
      })}
    </div>
  );
};

export default Operators;
