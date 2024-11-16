"use client";
import { ReactNode } from "react";
import toast from "react-hot-toast";
import { SWRConfig } from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Status: ${res.status}`);
  }
  return await res.json();
};

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SWRConfig
      value={{
        fetcher: fetcher,
        onError(err) {
          toast.error(err, {
            position: "top-right",
          });
        },
        revalidateOnReconnect: false,
        revalidateOnFocus: false,
        dedupingInterval: 60000, // Cache data for 60 seconds
        shouldRetryOnError: false,
        keepPreviousData: true,
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default Providers;
