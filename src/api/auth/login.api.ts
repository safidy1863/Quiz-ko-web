import { TLoginPayload } from "@/types";
import { axiosInstance } from "../axios-instance";

export const loginApi = async (body: TLoginPayload) => {
  const response = await axiosInstance.post("auth/login", body);
  return response;
};
