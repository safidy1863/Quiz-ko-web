import { useMutation } from "@tanstack/react-query";
import { useToast } from "../use-toast";
import { EToast, TLoginPayload } from "@/types";
import { loginApi } from "@/api";

type TUseLoginProps = {
  action?: VoidFunction;
};

export const useLogin = ({ action }: TUseLoginProps) => {
  const { showToast } = useToast();

  const mutation = useMutation({
    mutationFn: (mutateData: TLoginPayload) => loginApi(mutateData),
    onSuccess: () => {
      showToast("Login réussi", EToast.SUCCESS, "Success");
      action && action();
    },
    onError: () => {
      showToast("Erreur", EToast.ERROR, "Erreur");
    },
  });

  return mutation;
};
