/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { useToast } from "../custom/use-toast";
import { EToast } from "@/types";
import { getAllClassRoom } from "@/api";
import { useEffect } from "react";

export const useGetClassRooms = () => {
  const { showToast } = useToast();

  const { isLoading, data, refetch, error } = useQuery({
    queryKey: ["get-classRooms"],
    queryFn: () => getAllClassRoom(),
  });

  const loading = isLoading;

  useEffect(() => {
    if (error) {
      if ((error as any)?.code !== "ERR_CANCELED") {
        showToast(
          "Erreur lors de la recuperation de la liste des classes",
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
