"use client";
import React from "react";
import { Pagination as AntPagination } from "antd";
import useSearchParamsNext from "@/src/shared/hooks/useSearchParamsNext";
import { usePathname, useRouter } from "next/navigation";
const TOTAL_PAGES = 30;

function Pagination() {
  const { params, searchParams } = useSearchParamsNext();
  const { replace } = useRouter();
  const pathname = usePathname();
  return (
    <>
      <AntPagination
        current={Number(searchParams?.get("page"))}
        total={TOTAL_PAGES}
        onChange={(page) => {
          params.set("page", page?.toString());
          replace(`${pathname}?${params?.toString()}`);
        }}
      />
    </>
  );
}
export default Pagination;
