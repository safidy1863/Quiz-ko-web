export enum EQuestionType {
  SINGLE = "SINGLE",
  MULTIPLE = "MULTIPLE",
}

export type TQuestion = {
  id: string;
  title: string;
  description: string;
  point: number;
  type: EQuestionType;
};

export type TQuestionPayload = TQuestion & {
  subjectId?: string;
};
