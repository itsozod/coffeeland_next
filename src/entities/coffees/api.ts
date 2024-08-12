export const getCoffees = async (query = "", page: number) => {
  try {
    const response = await fetch(
      `http://localhost:5000/coffees?q=${query}&_limit=5&_page=${page}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
