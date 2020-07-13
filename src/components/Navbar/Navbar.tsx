import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles, useTheme } from "react-jss";

import { NavItem } from "./Nav-item";

const useStyles = createUseStyles({
  nav: { display: "flex" },
  navItem: {
    position: "relative",
    textDecoration: "none",
    fontSize: 14,
  },
  navDetails: {
    position: "absolute",
    padding: "10px 0",
    margin: 0,
    border: "1px solid rgb(18, 18, 18)",
    width: 250,
    top: 0,
    borderRadius: 3,
    zIndex: -5,
    listStyleType: "none",
    opacity: 0,
    background: ({theme}) => theme.colorPrimary,
    transition: "all .2s ease-in-out"
  },
  navDetailsItem: {
    position: "relative",
    padding: "0 13px",
    "&:not(:first-child)": {
      marginTop: 15,
      "&::before": {
        position: "absolute",
        content: "''",
        width: "100%",
        height: 2,
        top: -7,
        background: "linear-gradient(to right, rgba(247, 247, 247,0) 0%,rgba(247, 247, 247, 0.98) 50%,rgba(247, 247, 247,1) 51%,rgba(247, 247, 247,0) 99%,rgba(247, 247, 247,0) 100%)"
      }
    },
    "&::after": {
      position: "absolute",
      top: 8,
      right: 0,
      bottom: 0,
      left: 0,
      content: "''",
      width: "100%",
      height: "110%",
      opacity: 0,
      background: "linear-gradient(to top, rgba(255, 255, 255, .5), transparent)",
      transition: "opacity .2s ease",
    },
    "&:hover": {
      "&::after": { opacity: .6 },
    },
    "& a": { color: "#fff" }
  },
  collectionsItem: {
    "&:hover": {
      "& $navDetails": {
        opacity: 1,
        top: "100%",
      }
    }
  },
});

export const Navbar: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles({theme});

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.navItem}>
        <NavItem>Главная</NavItem>
      </Link>
      <Link to="/collections" className={`${styles.navItem} ${styles.collectionsItem}`}>
        <NavItem
          isManyThings
          >Коллекции</NavItem>
        <ul 
          className={styles.navDetails}
          >
          <li className={styles.navDetailsItem}>
            <Link
              to="/collections/spider-man-part-1"
              className={styles.navItem}
            >
              Человек-Паук: Герои и злодеи часть 1
            </Link>
          </li>
          <li className={styles.navDetailsItem}>
            <Link
              to="/collections/spider-man-part-2"
              className={styles.navItem}
            >
              Человек-Паук: Герои и злодеи часть 2
            </Link>
          </li>
          <li className={styles.navDetailsItem}>
            <Link
              to="/collections/spider-man-part-3"
              className={styles.navItem}
            >
              Человек-Паук: Герои и злодеи часть 3
            </Link>
          </li>
        </ul>
      </Link>
      <Link to="/gallery" className={styles.navItem}>
        <NavItem>Галерея</NavItem>
      </Link>
    </nav>
  );
};
