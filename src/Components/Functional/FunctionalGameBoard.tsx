import "./styles/game-board.css";

import { TSGameInfo } from "../../types";
import { useState, FormEvent } from "react";

export function FunctionalGameBoard({ handleAnswer, fishData }: TSGameInfo) {
  const [inputFishAnswer, setInputFishAnswer] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAnswer(inputFishAnswer.toLowerCase());
    setInputFishAnswer("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={fishData.url} alt={fishData.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={inputFishAnswer}
          onChange={(e) => setInputFishAnswer(e.target.value)
          }
        />
        <input type="submit" />
      </form>
    </div>
  );
}