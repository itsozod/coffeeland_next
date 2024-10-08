"use client";
import { Coffee } from "@/src/shared/types/types";
import CoffeeCard from "@/src/entities/coffees/CoffeeCard";
import classes from "./content.module.css";
import { useGetCoffees } from "@/src/entities/coffees/useGetCoffees";
import Loader from "@/src/shared/ui/loader/Loader";

export default function Menu() {
  const { data: coffees, isLoading, error } = useGetCoffees();
  if (error) return <div>{error?.message}</div>;
  if (isLoading) return <Loader />;

  return (
    <>
      <div className={classes["full_container"]}>
        <div className={classes["coffeecard_container"]}>
          {coffees?.map((coffee: Coffee) => {
            return <CoffeeCard key={coffee?.id} coffee={coffee} />;
          })}
        </div>
      </div>
    </>
  );
}
