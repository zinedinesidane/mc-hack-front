import { useQuery } from "@tanstack/react-query";
import { getCompanyGroupes } from "../../api/groupes";

export function useGroupes() {
  const {
    isLoading,
    data: groupes,
    error,
  } = useQuery({
    queryKey: ["groupes"],
    queryFn: getCompanyGroupes,
  });

  return {
    isLoading,
    groupes,
    error,
  };
}
