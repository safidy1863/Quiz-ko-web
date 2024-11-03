/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { useToast } from "../custom/use-toast";
import { EToast } from "@/types";
import { getTestsByLevelId } from "@/api";
import { useEffect } from "react";

type UseGetTestByLevelIdProps = {
  levelId?: string ;
};

export const useGetTestByLevelId = ({ levelId }: UseGetTestByLevelIdProps) => {
  const { showToast } = useToast();

  const { isLoading, data, refetch, error } = useQuery({
    queryKey: ["get-levels", levelId],
    queryFn: () => getTestsByLevelId(levelId ?? ""),
    enabled: levelId !== undefined && levelId !== "",
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
