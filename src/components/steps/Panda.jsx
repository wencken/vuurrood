import React from "react";

import styles from "./Result.module.css";
import stylesLayout from "../../containers/App.module.css";
import PageHeader from "../PageHeader";

const Panda = () => {
  return(
    <>
      <PageHeader/>
      <section className={stylesLayout.result}>
        <h2 className={`visually-hidden`}>Case</h2>
        <article className={styles.article}>
          <div className={styles.wrapper}>
            <h3 className={styles.title}>Panda</h3>
            <p className={styles.text}>De Panda is heel <span className={`hover-blue`}>zeldzaam</span> en daardoor <span className={`hover-blue`}>niet zo bekend</span>. Hij leeft ook in <span className={`hover-blue`}>ontoegankelijke gebieden</span>. Hij is <span className={`hover-blue`}>speels van aard</span> en heeft een <span className={`hover-blue`}>ongewoon uiterlijk</span>. Hij is <span className={`hover-blue`}>spontaan</span>, <span className={`hover-blue`}>vrolijk</span>, <span className={`hover-blue`}>behendig</span> en <span className={`hover-blue`}>aanhankelijk</span>. Hij <span className={`hover-blue`}>past zich snel aan</span> aan en blijft <span className={`hover-blue`}>goed geluimd</span>.</p> 
          </div>
        </article>
      </section>
    </>
  );
};

export default Panda;