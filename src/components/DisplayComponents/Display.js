import React from "react";

const Display = props => {
  const { number } = props;
  return (
    <div className="display">
      {/* Display any props data here */}
      <div className="displayText">{number}</div>
    </div>
  );
};

export default Display;
