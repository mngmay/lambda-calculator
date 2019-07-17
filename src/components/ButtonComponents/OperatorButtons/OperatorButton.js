import React from "react";

const OperatorButton = props => {
  const { char, value, addOperator } = props;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={() => addOperator(value)} className="operatorButton">
        {char}
      </button>
    </>
  );
};

export default OperatorButton;
