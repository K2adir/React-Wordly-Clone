import React, { useState } from "react";
import "../../styles.css";

function Guess() {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted([...submitted, input]);
    setInput("");
  };

  return (
    <>
      <div className=" ">
        {submitted.map((text, index) => (
          <div key={index}>{text}</div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          maxLength="5"
          minLength="5"
          value={input}
          id="guess-input"
          type="text"
          onChange={(e) => {
            setInput(e.target.value.toUpperCase());
          }}
        />
        {input.length >= 5 && <button type="submit">Submit</button>}
      </form>
    </>
  );
}

export default Guess;