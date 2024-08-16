export const dynamic = "force-dynamic";
import { getCoffees } from "@/src/entities/coffees/api";
import CoffeeCard from "@/src/entities/coffees/CoffeeCard";
import { Params } from "@/src/entities/coffees/params.types";
import PaginationLayout from "@/src/pages/menuPage/ui/Pagination/Pagination";
import Search from "@/src/pages/menuPage/ui/Search/Search";
import { Coffee } from "@/src/shared/types/types";
import React from "react";
import classes from "./page.module.css";

export default async function Menu({ searchParams }: { searchParams: Params }) {
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
            return <CoffeeCard key={coffee?.id} coffee={coffee} />;
          })}
        </div>
        <PaginationLayout />
      </div>
    </>
  );
}
