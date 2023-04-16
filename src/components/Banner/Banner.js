import React from "react";

function Banner({ result, answer, guessCount, reset }) {
  const className = result === "happy" ? "happy" : "sad";
  const sadResult = (
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  );
  const happyResult = (
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong> {guessCount} guesses</strong>.
    </p>
  )
  return (
    <div className={`banner ${className}`}>
      { result === "happy" ? happyResult : sadResult }
      <button className="reset" onClick={reset}>Reset</button>
    </div>
  );
}

export default Banner;
