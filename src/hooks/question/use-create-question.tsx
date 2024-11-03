import { useMutation } from "@tanstack/react-query";
import { useToast } from "../custom/use-toast";
import { EToast, TErrorResponse, TQuestionPayload } from "@/types";
import { createQuestion } from "@/api";

type TUseCreateQuestionProps = {
  action?: VoidFunction;
};

export const useCreateQuestion = ({ action }: TUseCreateQuestionProps) => {
  const { showToast } = useToast();

  const mutation = useMutation({
    mutationFn: (mutateData: TQuestionPayload) => createQuestion(mutateData),
    onSuccess: () => {
      if (action) action();
    },
    onError: (err) => {
      const error = err as unknown as TErrorResponse;
      showToast(error.response.data.message, EToast.ERROR, "Erreur");
    },
  });

  return mutation;
};
