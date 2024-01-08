export type TSFishData = {
  name: string,
  url: string
};

export type TSGameInfo = {
  handleAnswer: (name:string) => void;
  fishData:TSFishData
 
};

export type TSFinalScore = {
  totalCount: number;
  correctCount: number;
};
export type TSScoreBoard = {
  incorrectCount: number;
  correctCount: number;
  answersLeft: string[];
};