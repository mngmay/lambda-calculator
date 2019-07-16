import React from "react";

const NumberButton = ({ number }) => {
  //could also pass props as argument
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className={`numberButton button-${number}`}>{number}</button>
      {/* Can also do:  <button className="numberButton">{props.number}</button>  */}
    </>
  );
};

export default NumberButton;
