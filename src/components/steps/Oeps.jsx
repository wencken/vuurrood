import React from "react";
import { Link } from "react-router-dom";

import styles from "./Result.module.css";
import stylesLayout from "../../containers/App.module.css";
import PageHeader from "../PageHeader";

const Oeps = () => {
  return(
    <>
      <PageHeader/>
      <section className={stylesLayout.result}>
        <h2 className={`visually-hidden`}>Case</h2>
        <article className={styles.article}>
          <h3 className={styles.title}>Oeps</h3>
          <div className={styles.wrapper}>
            <p className={styles.text}>Nog niet gevonden wat je zocht?</p>
            <Link 
              className={styles.text}
              to="https://www.scoutsengidsenvlaanderen.be/totemzoeker" 
              target="_blank"
              rel="noopener noreferrer">
             <span className={`hover-blue`}>Ontdek het hier</span>
            </Link>
          </div>
        </article>
      </section>
    </>
  );
};

export default Oeps;