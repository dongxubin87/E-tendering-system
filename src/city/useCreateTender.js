import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditTender } from "../services/apiTenders";

export function useCreateTender() {
  const queryClient = useQueryClient();

  const { mutate: createTender, isLoading: isCreating } = useMutation({
    mutationFn: createEditTender,
    onSuccess: () => {
      toast.success("New tender successfully created");
      queryClient.invalidateQueries({ queryKey: ["tenders"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createTender };
}
