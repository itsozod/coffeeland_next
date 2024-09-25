import Menu from "@/src/pages/menuPage/content";
import PaginationLayout from "@/src/pages/menuPage/ui/Pagination/Pagination";
import Search from "@/src/pages/menuPage/ui/Search/Search";
import React from "react";

const MenuPage = () => {
  return (
    <>
      <Search />
      <Menu />
      <PaginationLayout />
    </>
  );
};

export default MenuPage;
