import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createGroupe } from "../../api/authentification";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createGroupe,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => console.error(err),
  });

  return { isCreating, createCabin };
}
