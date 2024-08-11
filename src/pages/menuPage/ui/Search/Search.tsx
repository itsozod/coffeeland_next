"use client";
import useSearchParamsNext from "@/src/shared/hooks/useSearchParamsNext";
import { Flex, Input } from "antd";
import { usePathname, useRouter } from "next/navigation";
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
    <>
      <Flex
        justify="center"
        align="center"
        style={{
          marginTop: "10px",
        }}
      >
        <Input
          style={{
            width: "100%",
            maxWidth: "300px",
          }}
          size="large"
          placeholder="Search..."
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams?.get("name")?.toString()}
        />
      </Flex>
    </>
  );
};

export default Search;
