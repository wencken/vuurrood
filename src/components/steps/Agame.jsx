import React from "react";

import styles from "./Result.module.css";
import stylesLayout from "../../containers/App.module.css";
import PageHeader from "../PageHeader";

const Agame = () => {
  return(
    <>
      <PageHeader/>
      <section className={stylesLayout.result}>
        <h2 className={`visually-hidden`}>Case</h2>
        <article className={styles.article}>
          <div className={styles.wrapper}>
            <h3 className={styles.title}>Agame</h3>
            <p className={styles.text}>Deze hagedis is een <span className={`hover-blue`}>schrokop</span>. Hij is <span className={`hover-blue`}>grappig</span>, <span className={`hover-blue`}>ondeugend</span>, <span className={`hover-blue`}>nieuwsgierig</span> en <span className={`hover-blue`}>uitdagend</span>. De Agame <span className={`hover-blue`}>past zich vlot aan</span>. Hij is erg <span className={`hover-blue`}>snel</span>, soms <span className={`hover-blue`}>merkwaardig</span>, maar <span className={`hover-blue`}>ongevaarlijk</span>. De Agame is verzot op <span className={`hover-blue`}>zon en warmte</span>. Hij intimideert zijn vijanden door <span className={`hover-blue`}>grootdoenerij</span>.</p> 
          </div>
        </article>
      </section>
    </>
  );
};

export default Agame;