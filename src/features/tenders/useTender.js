import { useQuery } from "@tanstack/react-query";
import { getTender } from "../../services/apiTenders";
import { useParams } from "react-router-dom";

export function useTender() {
  const { id } = useParams();
  const {
    isLoading,
    data: tender,
    error,
  } = useQuery({
    queryKey: ["tender", id],
    queryFn: () => getTender(id),
    retry: false,
  });

  return { isLoading, tender, error };
}
