import React from "react";
import { createUseStyles } from "react-jss";

import { NavItem } from "./Nav-item";

const useStyles = createUseStyles({
  header: {
    marginTop: 20,
  },
  headerNav: {
    display: "flex"
  }
});

export const Header: React.FC = () => {
  const styles = useStyles();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className="row">
          <nav className={styles.headerNav}>
            <NavItem>Коллекции</NavItem>
            <NavItem>Галерея</NavItem>
          </nav>
        </div>
      </div>
    </header>
  );
}
