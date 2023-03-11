import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  return <span className={`cell ${status}`}>{letter}</span>;
}

function GuessResults({ value, answer }) {
  //
  const result = checkGuess(value, answer);

  return (
    <>
      <p className="guess">
        {range(5).map((num) => (
          <Cell
            key={num}
            letter={result ? result[num].letter : undefined}
            status={result ? result[num].status : undefined}
          />
        ))}
      </p>
    </>
  );
}

export default GuessResults;
