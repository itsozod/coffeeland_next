"use client";

import { ReactNode } from "react";
import { SWRConfig } from "swr";
const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SWRConfig
      value={{
        fetcher: fetcher,
        revalidateOnReconnect: false,
        revalidateOnFocus: false,
        dedupingInterval: 1000000,
        shouldRetryOnError: false,
        keepPreviousData: true,
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default Providers;
