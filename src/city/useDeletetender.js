import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTender as deleteTenderApi } from "../services/apiTenders";
import toast from "react-hot-toast";

export function useDeleteTender() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteTender } = useMutation({
    mutationFn: deleteTenderApi,
    onSuccess: () => {
      toast.success("Tender successfully deleted"),
        queryClient.invalidateQueries({ queryKey: ["tenders"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteTender };
}
