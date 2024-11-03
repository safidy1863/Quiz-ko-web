import { TAnswer } from "./answer.types";
import { TQuestion } from "./question.types";

export type TTest = {
  id: string;
  title: string;
  duration: string;
  isActive: true;
  subjectId: string;
};

export type TTestStat = {
  levels: {
    id: string;
    label: string;
    testsNumber: number;
  }[];
};

export type TTestWithQuestionNumber = {
  test: TTest;
  questionNumber: number;
};

export type TTestWithSubjectQuestions = TTest & {
  subjectQuestion: {
    question: TQuestion & {
      answers: TAnswer[];
    };
  }[];
  questionNumber: number;
};
