export const paramsGenerator = (params: URLSearchParams) => {
  return params?.toString() ? `&${params.toString()}` : "";
};
