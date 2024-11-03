import { useMutation } from "@tanstack/react-query";
import { useToast } from "../custom/use-toast";
import { EToast, TAnswerPayload, TErrorResponse } from "@/types";
import { createMultipleAnswer } from "@/api";

type TUseCreateAnswerProps = {
  action?: VoidFunction;
};

export const useCreateMultipleAnswer = ({ action }: TUseCreateAnswerProps) => {
  const { showToast } = useToast();

  const mutation = useMutation({
    mutationFn: (mutateData: { questionId: string; data: TAnswerPayload[] }) =>
      createMultipleAnswer(mutateData.questionId, mutateData.data),
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