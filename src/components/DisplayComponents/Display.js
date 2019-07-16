import React from "react";

const Display = props => {
  return (
    <div className="display">
      {/* Display any props data here */}
      <div className="displayText">{props.displayState}</div>
    </div>
  );
};

export default Display;
