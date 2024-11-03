 
 
import { useQuery } from "@tanstack/react-query";
import { getStatTest } from "@/api";

export const useGetTestStats = () => {
  const { isLoading, data, refetch, error } = useQuery({
    queryKey: ["get-stats-tests"],
    queryFn: () => getStatTest(),
  });

  const loading = isLoading;

  return {
    refetch,
    loading,
    data,
    error,
  };
};
