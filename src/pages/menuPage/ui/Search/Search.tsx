"use client";
import useSearchParamsNext from "@/src/shared/hooks/useSearchParamsNext";
import { Input } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Search = () => {
  const { params, searchParams } = useSearchParamsNext();
  const { replace } = useRouter();
  const pathname = usePathname();
  function handleSearch(term: string) {
    if (term) {
      params.set("name", term);
    } else {
      params.delete("name");
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <Input
      size="large"
      placeholder="Search..."
      onChange={(e) => handleSearch(e.target.value)}
      defaultValue={searchParams?.get("name")?.toString()}
    />
  );
};

export default Search;
