import React from "react";

import styles from "./Result.module.css";
import stylesLayout from "../../containers/App.module.css";
import PageHeader from "../PageHeader";

const Baviaan = () => {
  return(
    <>
      <PageHeader/>
      <section className={stylesLayout.result}>
        <h2 className={`visually-hidden`}>Case</h2>
        <article className={styles.article}>
          <div className={styles.wrapper}>
            <h3 className={styles.title}>Baviaan</h3>
            <p className={styles.text}>Deze op de <span className={`hover-blue`}>grond levende aap</span> is <span className={`hover-blue`}>stevig gebouwd</span> en leeft in <span className={`hover-blue`}>hechte groepen</span> waarbinnen een <span className={`hover-blue`}>strenge rangorde</span> heerst. De Baviaan is <span className={`hover-blue`}>bezorgd</span>, <span className={`hover-blue`}>moedig</span> en heeft een <span className={`hover-blue`}>groot aanpassingsvermogen</span>. Hij kan soms <span className={`hover-blue`}>opvliegend</span> reageren. De Baviaan is <span className={`hover-blue`}>vooruitziend</span> en een <span className={`hover-blue`}>goede na-aper</span>.</p> 
          </div>
        </article>
      </section>
    </>
  );
};

export default Baviaan;