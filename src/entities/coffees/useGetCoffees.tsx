import useSWR from "swr";
import { Params } from "./params.types";

export const useGetCoffees = (params: Params) => {
  const { data, error, isLoading } = useSWR(
    `https://coffeeland-next-api.vercel.app/coffees?q=${
      params?.name ? params?.name : ""
    }&_limit=5&_page=${params?.page ? params?.page : ""}`
  );
  return { data, error, isLoading };
};
