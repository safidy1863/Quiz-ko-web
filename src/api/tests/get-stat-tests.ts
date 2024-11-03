import { TTestStat } from "@/types";
import { axiosInstance } from "../axios-instance";
import { KEY_TOKEN_LOCAL_STORAGE } from "../../constants";

export const getStatTest = async () => {
  const token = localStorage.getItem(KEY_TOKEN_LOCAL_STORAGE);
  const response = await axiosInstance.get<TTestStat>("test/stats", {
    headers: {
      Authorization: `Bearer ${token}`
    },
  });

  return response.data;
};
