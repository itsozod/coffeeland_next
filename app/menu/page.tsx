import { Params } from "@/src/entities/coffees/params.types";
import Menu from "@/src/pages/menuPage/content";
import PaginationLayout from "@/src/pages/menuPage/ui/Pagination/Pagination";
import Search from "@/src/pages/menuPage/ui/Search/Search";
import React from "react";

const MenuPage = ({ searchParams }: { searchParams: Params }) => {
  return (
    <>
      <Search />
      <Menu searchParams={searchParams} />
      <PaginationLayout />
    </>
  );
};

export default MenuPage;
