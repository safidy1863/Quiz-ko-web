import { TQuestionPayload } from "../../types";
import { axiosInstance } from "../axios-instance";

export const createQuestion = async (body: TQuestionPayload) => {
  const response = await axiosInstance.post("questions", body);
  return response;
};
