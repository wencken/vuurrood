import React from "react";

import styles from "./About.module.css";
import stylesLayout from "./App.module.css";

import PageHeader from "../components/PageHeader";
import Timer from "../components/Timer";

const About = () => {

  return (
    <>
      <PageHeader/>
      <section className={stylesLayout.about}>
        <h2 className={`visually-hidden`}>About me</h2>
        <div className={styles.wrapper}>
          <article className={styles.article}>
            <div>
              <h3 className={styles.title}>Wencke Nuyt</h3>
              <Timer text="years old" seconds="0"/>
            </div>
            <p className={styles.quote}>De Panda is heel <span className={`hover-red`}>zeldzaam</span> en daardoor niet zo bekend. Hij leeft ook in <span className={`hover-red`}>ontoegankelijke gebieden</span>. Hij is <span className={`hover-red`}>speels van aard</span> en heeft een <span className={`hover-red`}>ongewoon uiterlijk</span>. Hij is <span className={`hover-red`}>spontaan</span>, <span className={`hover-red`}>vrolijk</span>, <span className={`hover-red`}>behendig</span> en <span className={`hover-red`}>aanhankelijk</span>. Hij <span className={`hover-red`}>past zich snel aan</span> en blijft <span className={`hover-red`}>goed geluimd</span>.</p>
          </article>
          <div className={styles.img}></div>
        </div>
      </section>
    </>
  );
};

export default About;