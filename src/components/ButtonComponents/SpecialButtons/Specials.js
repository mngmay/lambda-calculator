import React, { useState } from "react";

//import any components needed

import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);
  return (
    <div className="specialButtons">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {specialState.map((special, index) => {
        return <SpecialButton special={special} key={index} />;
        // adding index and key is simply to get rid of the React error
      })}
    </div>
  );
};

export default Specials;
