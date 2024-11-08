import { TLoginPayload, TLoginResponse } from "@/types";
import { axiosInstance } from "../axios-instance";

export const loginApi = async (body: TLoginPayload) => {
  const response = await axiosInstance.post<TLoginResponse>("auth/login", body);
  return response;
};
