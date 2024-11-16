import * as I from "@models";
export async function getCoffee(id: string): Promise<I.Coffee | null> {
  const res = await fetch(
    `https://coffeeland-next-api.vercel.app/coffees/${id}`,
    {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    }
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
}
