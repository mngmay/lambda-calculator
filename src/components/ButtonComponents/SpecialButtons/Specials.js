import React, { useState } from "react";

//import any components needed

import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

//Import your array data to from the provided data file

const Specials = props => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);
  const { specialMagic } = props;
  return (
    <div className="specialButtons">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {specialState.map(special => {
        return (
          <SpecialButton
            special={special}
            key={special}
            specialMagic={specialMagic}
          />
        );
        // adding index and key is simply to get rid of the React error
      })}
    </div>
  );
};

export default Specials;
