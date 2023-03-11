import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guess from "../Guess/Guess";
import GuessResults from "../GuessResults/GuessResults";

const answer = sample(WORDS);

console.info({ answer });

function Game() {
  return (
    <>
      {/* <GuessResults /> */}
      <Guess answer={answer} />
    </>
  );
}

export default Game;
