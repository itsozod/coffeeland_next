"use client";
import React, { useEffect, useState } from "react";
// import Search from "@/src/pages/menuPage/ui/Search/Search";
import { Coffee } from "@/src/shared/types/types";
import { getCoffees } from "@/src/entities/coffees/api";
import classes from "./content.module.css";
import CoffeeCard from "@/src/entities/coffees/CoffeeCard";
import { Params } from "@/src/entities/coffees/params.types";
// import PaginationLayout from "@/src/pages/menuPage/ui/Pagination/Pagination";

export default function Menu({ searchParams }: { searchParams: Params }) {
  // const coffees: Coffee[] = await getCoffees(
  //   searchParams?.name,
  //   searchParams?.page
  // );

  const [coffees, setCoffees] = useState<Coffee[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoffees(searchParams?.name, searchParams?.page);
      setCoffees(data);
    };

    fetchData();
  }, [searchParams]);

  return (
    <>
      {/* <Search /> */}
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
        {/* <PaginationLayout /> */}
      </div>
    </>
  );
}
