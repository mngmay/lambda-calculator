import React from "react";

const NumberButton = props => {
  //could also pass props as argument
  const { number, addNumber } = props;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button
        className={`numberButton button-${number}`}
        onClick={() => addNumber(number)}
      >
        {number}
      </button>
      {/* Can also do:  <button className="numberButton">{props.number}</button>  */}
    </>
  );
};

export default NumberButton;
