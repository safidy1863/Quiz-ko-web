export type TAnswer = {
  label: string;
  isCorrect: boolean;
  questionId: string;
};

export type TAnswerPayload = {
  id?: string;
  label: string;
  isCorrect: boolean;
  questionId?: string;
  answerId?: string;
};
