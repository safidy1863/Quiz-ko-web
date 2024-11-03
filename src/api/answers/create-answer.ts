import { TAnswerPayload } from "../../types";
import { axiosInstance } from "../axios-instance";

export const createAnswer = async (body: TAnswerPayload) => {
  const response = await axiosInstance.post("answers", body);
  return response;
};
