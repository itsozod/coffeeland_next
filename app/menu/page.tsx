import { Menu } from "@/page/menuPage";
import { PaginationLayout } from "@/page/menuPage/ui/Pagination";
import { Search } from "@/page/menuPage/ui/Search";

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
