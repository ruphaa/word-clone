import React from "react";

const firstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const secondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const thirdRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

const getStatusByLetter = (validatedGuesses) => {
  const statusObj = {};
  validatedGuesses.forEach(guess => {
    guess.forEach(word => {
      statusObj[word.letter] = word.status;
    })
  });
  return statusObj;
}

function Keyboard({ validatedGuesses }) {
  let statusByLetter = getStatusByLetter(validatedGuesses)
  return (
    <div className="keyboard">
      <div className="key-row">
        {
          firstRow.map(letter => {
            const className = `key-cell ${statusByLetter[letter] ?? ''}`;
            return <span className={className.trim()} key={letter}>{letter}</span>
          })
        }
      </div>
      <div className="key-row">
        {
          secondRow.map(letter => {
            const className = `key-cell ${statusByLetter[letter] ?? ''}`;
            return <span className={className.trim()} key={letter}>{letter}</span>
          })
        }
      </div>
      <div className="key-row">
        {
          thirdRow.map(letter => {
            const className = `key-cell ${statusByLetter[letter] ?? ''}`;
            return <span className={className.trim()} key={letter}>{letter}</span>
          })
        }
      </div>
    </div>
  );
}

export default Keyboard;
