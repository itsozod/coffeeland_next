export const getCoffees = async (params?: string) => {
  try {
    const response = await fetch(`http://localhost:5000/coffees?q=${params}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
