import Image from "next/image";
import classes from "./CoffeeCard.module.css";
import { Coffee } from "@/src/shared/types/types";
import { Button, Flex } from "antd";
import { AddIcon } from "@/src/shared/assets/icons/addIcon";

const CoffeeCard = ({ coffee }: { coffee: Coffee }) => {
  return (
    <>
      <div className={classes["coffeecard"]} key={coffee?.id}>
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
        <p>{coffee?.title}</p>

        <Flex
          justify="space-between"
          align="center"
          style={{
            marginTop: "auto",
          }}
        >
          <div>
            <span
              style={{
                color: "#967259",
                fontWeight: "bold",
              }}
            >
              $
            </span>
            {coffee?.price}
          </div>
          <Button icon={<AddIcon />}></Button>
        </Flex>
      </div>
    </>
  );
};

export default CoffeeCard;
