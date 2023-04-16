import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const GuessList = ({ guessList, answer }) => {
  return (
    <div className="guess-results">
      {
        range(NUM_OF_GUESSES_ALLOWED).map(index => (
          <Guess key={crypto.randomUUID()} guess={guessList[index]} answer={answer}/>
        ))
      }
    </div>
  );
}

export default GuessList;
