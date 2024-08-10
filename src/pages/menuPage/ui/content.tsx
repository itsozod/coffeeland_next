import React from "react";
import Search from "./Search/Search";

const getCoffees = async (params?: string) => {
  try {
    const response = await fetch(
      `http://localhost:5000/coffees?q=${params}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const Menu = async ({ searchParams }: { searchParams: { name: string } }) => {
  const coffees = await getCoffees(
    searchParams?.name ? searchParams?.name : ""
  );

  return (
    <>
      <Search />
      <div>
        {coffees?.map((coffee: any) => {
          return (
            <>
              <div>{coffee?.title}</div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
