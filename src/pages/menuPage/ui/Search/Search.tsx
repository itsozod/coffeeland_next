"use client";
import useSearchParamsNext from "@/src/shared/hooks/useSearchParamsNext";
import { useDebounce } from "@uidotdev/usehooks";
import { Flex, Input } from "antd";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Search() {
  const { params, searchParams } = useSearchParamsNext();
  const { replace } = useRouter();
  const pathname = usePathname();
  const [searchValue, setSearchValue] = useState(searchParams?.get("q") || "");
  const debounceValue = useDebounce(searchValue, 300);
  function handleSearch(term: string) {
    setSearchValue(term);
  }

  useEffect(() => {
    if (debounceValue?.length) {
      params.set("q", debounceValue);
      params.set("_page", "1");
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params.toString()}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceValue]);

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
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Flex>
    </>
  );
}
