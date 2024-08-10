import Image from "next/image";
import React from "react";
import classes from "./Loader.module.css";
import CoffeeGif from "@/src/shared/assets/img/coffee-gif.gif";

const Loader = () => {
  return (
    <div className={classes["loader_container"]}>
      <Image className={classes["loader"]} src={CoffeeGif} alt="loader" />
    </div>
  );
};

export default Loader;
