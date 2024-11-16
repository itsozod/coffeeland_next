"use client";
import React from "react";
import { Pagination } from "antd";
import { useSearchParamsNext } from "@/shared/hooks";
import { usePathname, useRouter } from "next/navigation";
const TOTAL_PAGES = 3;

export default function PaginationLayout() {
  const { params, searchParams } = useSearchParamsNext();
  const { replace } = useRouter();
  const pathname = usePathname();
  return (
    <>
      <Pagination
        current={Number(searchParams?.get("_page"))}
        total={TOTAL_PAGES * 10}
        onChange={(page) => {
          params.set("_page", page?.toString());
          replace(`${pathname}?${params?.toString()}`);
        }}
      />
    </>
  );
}
