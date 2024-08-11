import React from "react";
import Search from "./Search/Search";
import { Coffee } from "@/src/shared/types/types";
import { getCoffees } from "@/src/entities/coffees/api";
import classes from "./content.module.css";
import CoffeeCard from "@/src/entities/coffees/CoffeeCard";
import { Flex } from "antd";

const Menu = async ({ searchParams }: { searchParams: { name: string } }) => {
  const coffees = await getCoffees(
    searchParams?.name ? searchParams?.name : ""
  );

  return (
    <>
      <Flex vertical={true}>
        <Search />
        <div className={classes["coffeecard_container"]}>
          {coffees?.map((coffee: Coffee) => {
            return (
              <>
                <CoffeeCard coffee={coffee} />
              </>
            );
          })}
        </div>
      </Flex>
    </>
  );
};

export default Menu;
