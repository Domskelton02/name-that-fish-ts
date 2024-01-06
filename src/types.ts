export type TSFishData = {
  name: string,
  url: string
};

export type TSGameInfo = {
  handleAnswer: (name:string) => void;
  fishData:TSFishData
 
};

export type ClassAppData={
  fishName: string;
  correctCount: number;
  incorrectCount: number;
  index: number;
}

export type ClassAppState = {
  gameInformation: ClassAppData| null;
};

export type TSClassGameInfo={
  getGameInformation : (getGameInformation:ClassAppData|null)=>void;
}

export type TSFinalScore = {
  totalCount: number;
  correctCount: number;
};
export type TSScoreBoard = {
  incorrectCount: number;
  correctCount: number;
  answersLeft: string[];
};