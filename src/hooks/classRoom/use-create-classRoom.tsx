import { useMutation } from "@tanstack/react-query";
import { useToast } from "../custom/use-toast";
import { EToast, TErrorResponse, TLoginPayload } from "@/types";
import { loginApi } from "@/api";
import { KEY_TOKEN_LOCAL_STORAGE, paths } from "@/constants";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../custom";


export const useCreateClassRoom = () => {
  const navigate = useNavigate();
  const { toggleLoading } = useLoading();
  const { showToast } = useToast();

  const mutation = useMutation({
    mutationFn: (mutateData: TLoginPayload) => loginApi(mutateData),
    onSuccess: (res) => {
      localStorage.setItem(KEY_TOKEN_LOCAL_STORAGE, res.data.accessToken);

      showToast(
        "Vous êtes connecté en tant qu'Admin",
        EToast.SUCCESS,
        "Success"
      );

      toggleLoading();

      navigate(paths.dashboard);
    },
    onError: (err) => {
      const error = err as unknown as TErrorResponse;
      showToast(error.response.data.message, EToast.ERROR, "Erreur");
    },
  });

  return mutation;
};
