import { notFound } from "next/navigation";
import * as I from "@models";
import { getCoffee } from "@/entities/coffees/getCoffee";
import Image from "next/image";

const Page = async ({ params }: { params: { id: string } }) => {
  const coffee = await getCoffee(params?.id);

  if (!coffee) {
    notFound();
  }
  return (
    <div>
      Page: {coffee?.id}
      <p>{coffee?.title}</p>
      <p>{coffee?.price}</p>
      <Image
        style={{
          maxWidth: "100%",
          height: "150px",
          borderRadius: "25px",
        }}
        src={coffee?.img}
        alt="Image"
        width={200}
        height={100}
      />
    </div>
  );
};

export const generateStaticParams = async () => {
  const posts = await fetch(
    "https://coffeeland-next-api.vercel.app/coffees"
  ).then((res) => res.json());

  return posts.map((post: I.Coffee) => ({
    id: String(post?.id),
  }));
};

export default Page;
