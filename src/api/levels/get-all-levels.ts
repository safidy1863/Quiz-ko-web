import { TLevel } from "@/types";
import { axiosInstance } from "../axios-instance";

export const getAllLevels = async () => {
  const response = await axiosInstance.get<TLevel[]>("levels");

  return response.data;
};
