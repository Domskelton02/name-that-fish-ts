import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { initialFishes } from "../../constants/data";

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const fishIndex = correctCount + incorrectCount;
  const answersLeft = initialFishes
    .map((fishName) => fishName.name)
    .slice(fishIndex);
  const isGameOver = fishIndex === initialFishes.length;

  const handleAnswer = (name: string) => {
    initialFishes[fishIndex].name === name
      ? setCorrectCount(correctCount + 1)
      : setIncorrectCount(incorrectCount + 1);
  };

  return (
    <>
      {!isGameOver ? (
        <div>
          <FunctionalScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            answersLeft={answersLeft}
          />
          <FunctionalGameBoard
            fishData={initialFishes[fishIndex]}
            handleAnswer={handleAnswer}
          />
        </div>
      ) : (
        <FunctionalFinalScore
          totalCount={fishIndex}
          correctCount={correctCount}
        />
      )}
    </>
  );
}
