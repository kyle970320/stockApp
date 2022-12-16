import React, { useState } from "react";
import MainCalc from "./MainCalc";
import MainCapital from "./mainCapital/MainCapital";
import styles from "./Main.module.css";

const StockMain = () => {
  return (
    <React.Fragment>
      <section className={styles.mainSection}>
        <MainCapital />
        <MainCalc />
      </section>
    </React.Fragment>
  );
};

export default StockMain;
