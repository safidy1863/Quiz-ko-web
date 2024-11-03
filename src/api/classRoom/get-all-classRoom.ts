import { TClassRoom } from "../../types";
import { axiosInstance } from "../axios-instance";

export const getAllClassRoom = async () => {
  const response = await axiosInstance.get<TClassRoom[]>("class");

  return response.data;
};
