import React from "react";
import Search from "./Search/Search";
import { Coffee } from "@/src/shared/types/types";
import { getCoffees } from "@/src/entities/coffees/api";
import classes from "./content.module.css";
import CoffeeCard from "@/src/entities/coffees/CoffeeCard";
import Pagination from "./Pagination/Pagination";
import { Params } from "@/src/entities/coffees/params.types";

const Menu = async ({ searchParams }: { searchParams: Params }) => {
  const coffees: Coffee[] = await getCoffees(
    searchParams?.name,
    searchParams?.page
  );

  return (
    <>
      <Search />
      <div className={classes["full_container"]}>
        <div className={classes["coffeecard_container"]}>
          {coffees?.map((coffee: Coffee) => {
            return (
              <>
                <CoffeeCard coffee={coffee} />
              </>
            );
          })}
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default Menu;
