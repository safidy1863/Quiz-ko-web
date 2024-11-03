/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { useToast } from "../custom/use-toast";
import { EToast } from "@/types";
import { getTestById } from "@/api";
import { useEffect } from "react";

type UseGetTestByIdProps = {
  testId?: string ;
};

export const useGetTestById = ({ testId }: UseGetTestByIdProps) => {
  const { showToast } = useToast();

  const { isLoading, data, refetch, error } = useQuery({
    queryKey: ["get-test-by-id", testId],
    queryFn: () => getTestById(testId ?? ""),
    enabled: testId !== undefined && testId !== "",
  });

  const loading = isLoading;

  useEffect(() => {
    if (error) {
      if ((error as any)?.code !== "ERR_CANCELED") {
        showToast(
          "Erreur lors de la recuperation de la liste des tests",
          EToast.ERROR,
          "Erreur"
        );
      }
    }
  }, [error]);

  return {
    refetch,
    loading,
    data,
    error,
  };
};
