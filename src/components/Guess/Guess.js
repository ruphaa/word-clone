import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

const Guess = ({ guess, answer }) => {
  const isGuessPresent = guess && guess.word;
  const guessStatusList = isGuessPresent ? checkGuess(guess.word, answer) : [];
  return (
    <p className="guess">
      {
        range(5).map(index => {
          const className = `cell ${guessStatusList.length ? guessStatusList[index].status : ''}`
          return (
            <span className={className.trim()} key={crypto.randomUUID()}>{isGuessPresent ? guess.word[index] : null}</span>
          )
        })
      }
    </p>
  );
}

export default Guess;
