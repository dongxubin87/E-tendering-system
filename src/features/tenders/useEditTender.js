import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditTender } from "../../services/apiTenders";
import { toast } from "react-hot-toast";

export function useEditTender() {
  const queryClient = useQueryClient();

  const { mutate: editTender, isLoading: isEditing } = useMutation({
    mutationFn: ({ newTenderData, id }) => createEditTender(newTenderData, id),
    onSuccess: () => {
      toast.success("Tender successfully edited");
      queryClient.invalidateQueries({ queryKey: ["tenders"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editTender };
}
