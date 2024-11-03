/* eslint-disable @typescript-eslint/no-explicit-any */
import { BASE_URL, KEY_TOKEN_LOCAL_STORAGE } from "@/constants";
import { EToast } from "@/types";
import { Icon } from "@iconify/react";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const token = localStorage.getItem(KEY_TOKEN_LOCAL_STORAGE);

axiosInstance.defaults.headers.common.Authorization = token
  ? `Bearer ${token}`
  : "";

const showToast = (content: string, type: EToast, title: string) => {
  toast(
    <div>
      <h3 className="text-[#FF4B4B]">{title}</h3>
      <p>{content}</p>
    </div>,
    {
      type,
      className: "bg-white",
      icon: (
        <Icon
          icon="fluent-mdl2:status-error-full"
          className="text-2xl text-[#FF4B4B]"
        />
      ),
    }
  );
};

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      // const statusCode: HttpStatus = error.response.status as HttpStatus;
      return Promise.reject(error);
    }
    if ((error as any)?.code !== "ERR_CANCELED") {
      showToast(
        "Erreur de connexion. Veuillez réessayer plus tard",
        EToast.ERROR,
        "Erreur"
      );
    }
    return Promise.reject(error);
  }
);

export { axiosInstance };
