import React, { useState } from "react";
import "../../styles.css";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function Guess({ answer }) {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted([...submitted, input]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.length < 5) {
      e.preventDefault();
    }
  };

  return (
    <>
      <div className=" ">
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
          <GuessResults key={num} value={submitted[num]} answer={answer} />
        ))}
      </div>

      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          maxLength={5}
          minLength={5}
          value={input}
          id="guess-input"
          type="text"
          onChange={(e) => {
            setInput(e.target.value.toUpperCase());
          }}
          onKeyDown={handleKeyDown}
        />
        {input.length >= 5 && <button type="submit">Submit</button>}
      </form>
    </>
  );
}

export default Guess;
