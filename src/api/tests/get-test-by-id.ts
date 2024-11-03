import { TTestWithSubjectQuestions } from "@/types";
import { axiosInstance } from "../axios-instance";

export const getTestById = async (testId: string) => {
  const response = await axiosInstance.get<TTestWithSubjectQuestions>(
    `test/${testId}`
  );

  return response.data;
};
