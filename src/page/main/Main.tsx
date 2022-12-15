import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainCalc from "./MainCalc";
import MainCapital from "./mainCapital/MainCapital";
import MainList from "./MainList";
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
