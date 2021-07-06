import React from "react";

const SpecialButton = props => {
  const { special, specialMagic } = props;

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="specialButton" onClick={() => specialMagic(special)}>
        {special}
      </button>
    </>
  );
};

export default SpecialButton;
