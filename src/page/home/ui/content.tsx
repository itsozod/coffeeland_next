import UpCurves from "@/shared/ui/curves/UpCurves/UpCurves";
import React from "react";
import classes from "./content.module.css";

const Home = () => {
  return (
    <>
      <main className={classes["main_home"]}>
        <UpCurves />
      </main>
    </>
  );
};

export default Home;
