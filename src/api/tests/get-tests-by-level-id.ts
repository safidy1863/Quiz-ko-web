import { TTestWithQuestionNumber } from "@/types";
import { axiosInstance } from "../axios-instance";

export const getTestsByLevelId = async (levelId: string) => {
  const response = await axiosInstance.get<TTestWithQuestionNumber[]>(
    `test/by-level/${levelId}`
  );

  return response.data;
};
