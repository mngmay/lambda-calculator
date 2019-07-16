import React from "react";

const OperatorButton = ({ operator, value }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="operatorButton">{operator}</button>
    </>
  );
};

export default OperatorButton;
