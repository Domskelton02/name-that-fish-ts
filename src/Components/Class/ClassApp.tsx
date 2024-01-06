import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "../../constants/data";
export class ClassApp extends Component {
  state = {
    correctCount: 0,
    incorrectCount: 0,
  };

  handleAnswer: (name: string) => void = (name: string) => {
    const { correctCount, incorrectCount } = this.state;
    initialFishes[correctCount + incorrectCount].name === name
      ? this.setState({ correctCount: correctCount + 1 })
      : this.setState({ incorrectCount: incorrectCount + 1 });
    this.setState({ incorrectCount: incorrectCount  + 1 });
  };

  render() {
    const { correctCount, incorrectCount } = this.state;

    const fishIndex = correctCount + incorrectCount;
    const isGameOver = fishIndex === initialFishes.length;
    const answersLeft = initialFishes.map((fishName) => fishName.name);

    return (
      <>
        {!isGameOver? (
          <>
            <ClassScoreBoard
              incorrectCount={incorrectCount}
              correctCount={correctCount}
              answersLeft={answersLeft}
            />
            <ClassGameBoard
              fishData={initialFishes[fishIndex]}
              handleAnswer={this.handleAnswer}
            />
          </>
        ) : (
          <ClassFinalScore correctCount={correctCount} totalCount={fishIndex} />
        )}
      </>
    );
  }
}