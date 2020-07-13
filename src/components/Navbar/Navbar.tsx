import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";

import { NavItem } from "./Nav-item";

const useStyles = createUseStyles({
  nav: {
    display: "flex"
  },
  navItem: {
    textDecoration: "none"
  }
});

export const Navbar = () => {
  const styles = useStyles()

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.navItem}>
        <NavItem>Главная</NavItem>
      </Link>
      <Link to="/collections" className={styles.navItem}>
        <NavItem>Коллекции</NavItem>
      </Link>
      <Link to="/gallery" className={styles.navItem}>
        <NavItem>Галерея</NavItem>
      </Link>
    </nav>
  );
};
