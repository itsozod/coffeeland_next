import useSearchParamsNext from "@/src/shared/hooks/useSearchParamsNext";
import { paramsGenerator } from "@/src/shared/utils/paramsGenerator";
import useSWR from "swr";

export const useGetCoffees = () => {
  const { params } = useSearchParamsNext();
  const { data, error, isLoading } = useSWR(
    `https://coffeeland-next-api.vercel.app/coffees?_limit=5` +
      paramsGenerator(params)
  );
  return { data, error, isLoading };
};
