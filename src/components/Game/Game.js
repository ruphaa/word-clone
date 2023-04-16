import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput"
import GuessList from "../GuessList"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from '../Banner/Banner';
import Keyboard from '../Keyboard/Keyboard';
import { checkGuess } from "../../game-helpers";


// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [ guessList, setGuessList ] = React.useState([]);
  const [ result, setResult ] = React.useState("");
  const [ guessCount, setGuessCount ] = React.useState(0);
  const [ answer, setAnswer ] = React.useState(() => {
    return sample(WORDS);
  })
  const addNewGuess = (newGuess) => {
    const guess = {
      word: newGuess,
      id: crypto.randomUUID()
    }
    const guesses = [...guessList, guess];
    setGuessList(guesses);
    setGuessCount(guessCount + 1);
    if(newGuess == answer) {
      setResult("happy");
    }
  }
  const validatedGuesses = guessList.map(guess => (
    checkGuess(guess.word, answer)
  ))

  const reset = () => {
    setAnswer(sample(WORDS));
    setGuessList([]);
    setResult('');
  }
  console.info({ answer });

  return <>
    <GuessList
      guessList={guessList}
      answer={answer}
    />
    {
      (guessCount.length === NUM_OF_GUESSES_ALLOWED || result)
      ? (
        <Banner result={result} answer={answer} guessCount={guessCount} reset={reset}/>
      )
      : (
        <>
        <GuessInput
          addNewGuess={addNewGuess}
          answer={answer}
        />
        <Keyboard
          validatedGuesses={validatedGuesses}
        />
        </>
      )
    }
  </>;
}

export default Game;
