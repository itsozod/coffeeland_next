import { useSearchParamsNext } from "@/shared/hooks";
import { paramsGenerator } from "@/shared/utils";
import useSWR from "swr";

export const useGetCoffees = () => {
  const { params } = useSearchParamsNext();
  const { data, error, isLoading } = useSWR(
    `https://coffeeland-next-api.vercel.app/coffees?_limit=5` +
      paramsGenerator(params)
  );
  return { data, error, isLoading };
};
