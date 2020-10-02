import React from "react";

import styles from "./Result.module.css";
import stylesLayout from "../../containers/App.module.css";
import PageHeader from "../PageHeader";

const Spreeuw = () => {
  return(
    <>
      <PageHeader/>
      <section className={stylesLayout.result}>
        <h2 className={`visually-hidden`}>Case</h2>
        <article className={styles.article}>
          <div className={styles.wrapper}>
            <h3 className={styles.title}>Spreeuw</h3>
            <p className={styles.text}>Er bestaat geen meer <span className={`hover-blue`}>vrolijke</span>, <span className={`hover-blue`}>blijmoedige</span> en <span className={`hover-blue`}>opgewekte</span> vogel dan de Spreeuw. Hij beschouwt alle omstandigheden met <span className={`hover-blue`}>rust</span>, <span className={`hover-blue`}>jovialiteit</span> en een <span className={`hover-blue`}>wereldwijze blik</span>. Hij verliest nooit zijn <span className={`hover-blue`}>goed humeur</span>. De Spreeuw is <span className={`hover-blue`}>bescheiden</span>, <span className={`hover-blue`}>slim</span> en <span className={`hover-blue`}>speels</span>. Hij <span className={`hover-blue`}>leert gemakkelijk</span> iets bij. De Spreeuw heeft een <span className={`hover-blue`}>groot aanpassingsvermogen</span>. Hij kent een <span className={`hover-blue`}>hecht familieleven</span> en verdedigt zich <span className={`hover-blue`}>dapper</span> tegen vijanden.</p> 
          </div>
        </article>
      </section>
    </>
  );
};

export default Spreeuw;