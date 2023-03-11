import React from "react";

function GuessResults({ value }) {
  return (
    <>
      <p className="guess">
        {value &&
          value.split("").map((letter, index) => (
            <span key={index} className="cell">
              {letter}
            </span>
          ))}
      </p>
    </>
  );
}

export default GuessResults;
