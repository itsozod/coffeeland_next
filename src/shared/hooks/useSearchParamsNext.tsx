import { useSearchParams } from "next/navigation";

const useSearchParamsNext = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  return { params, searchParams };
};

export default useSearchParamsNext;
