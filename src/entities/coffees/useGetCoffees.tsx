import useSWR from "swr";
import useSearchParamsNext from "@/src/shared/hooks/useSearchParamsNext";

export const useGetCoffees = () => {
  const { params } = useSearchParamsNext();
  const { data, error, isLoading } = useSWR([
    "https://coffeeland-next-api.vercel.app/coffees?_limit=5" + params,
  ]);
  return { data, error, isLoading };
};
