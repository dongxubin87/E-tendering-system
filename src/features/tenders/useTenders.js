import { useQuery } from "@tanstack/react-query";
import { getTenders } from "../../services/apiTenders";

export function useTenders() {
  const {
    isLoading,
    data: tenders,
    error,
  } = useQuery({
    queryKey: ["tenders"],
    queryFn: getTenders,
  });

  return {
    isLoading,
    tenders,
    error,
  };
}
