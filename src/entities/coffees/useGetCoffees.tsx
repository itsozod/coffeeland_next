import useSWR from "swr";
import useSearchParamsNext from "@/src/shared/hooks/useSearchParamsNext";

export const useGetCoffees = () => {
  const { params } = useSearchParamsNext();
  const { data, error, isLoading } = useSWR(() => {
    const baseUrl = "https://coffeeland-next-api.vercel.app/coffees?_limit=5";
    return params ? `${baseUrl}&${params}` : baseUrl;
  });
  return { data, error, isLoading };
};
