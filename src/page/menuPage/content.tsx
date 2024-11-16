"use client";
import { CoffeeCard } from "@/entities/coffees";
import classes from "./content.module.css";
import { useGetCoffees } from "@/entities/coffees";
import Loader from "@/shared/ui/loader/Loader";
import * as I from "@models";

export default function Menu() {
  const { data: coffees, isLoading, error } = useGetCoffees();
  if (error) return <div>{error?.message}</div>;
  if (isLoading) return <Loader />;

  return (
    <>
      <div className={classes["full_container"]}>
        <div className={classes["coffeecard_container"]}>
          {coffees?.map((coffee: I.Coffee) => {
            return <CoffeeCard key={coffee?.id} coffee={coffee} />;
          })}
        </div>
      </div>
    </>
  );
}
