import React from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./PageHeader.module.css";

const PageHeader = ({ title }) => {
  const currentPage = window.location.pathname;

  return (
    <header className={currentPage === "/" ? `${styles.main}` : 
    currentPage === "/about-me" ? `${styles.main3}`
    : `${styles.main2}`}>
      <Link 
        to="https://www.vuurrood.nl" 
        className={currentPage === "/" ? `${styles.link}` 
        : currentPage === "/about-me" ? `${styles.link3}` 
        : `${styles.link2}`}
        target="_blank"
        rel="noopener noreferrer">
        Vuurrood
      </Link>
      <h1 className={`visually-hidden`}>{title}</h1>
      <div className={styles.tabBar}>
        <NavLink exact={true} to="/" activeClassName={styles.active}>Case</NavLink>
        <NavLink to="/about-me" activeClassName={styles.active}>About me</NavLink>
      </div>
    </header>
  );
};

PageHeader.defaultProps = {
  title: `Vuurrood`
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageHeader;