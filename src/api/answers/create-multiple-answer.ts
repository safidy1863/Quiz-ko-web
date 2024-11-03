import { KEY_TOKEN_LOCAL_STORAGE } from "../../constants";
import { TAnswerPayload } from "../../types";
import { axiosInstance } from "../axios-instance";

export const createMultipleAnswer = async (
  questionId: string,
  body: TAnswerPayload[]
) => {
  const token = localStorage.getItem(KEY_TOKEN_LOCAL_STORAGE);
  const response = await axiosInstance.post(`answers/${questionId}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
