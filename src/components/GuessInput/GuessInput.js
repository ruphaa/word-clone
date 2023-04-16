import React from "react";

const GuessInput = ({ addNewGuess, answer }) => {
  const [word, setWord] = React.useState("");
  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          addNewGuess(word);
          setWord("");
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          minLength={5}
          maxLength={5}
          value={word}
          pattern="[A-Za-z]{5}"
          title="Word must contain minimum and maximum of 5 letters"
          onChange={(event) => setWord(event.target.value.toUpperCase())}
        />
      </form>
    </>
    
  );
};

export default GuessInput;
