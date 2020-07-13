import React from "react";
import { createUseStyles } from "react-jss";

import { Navbar } from "../Navbar/Navbar";

const useStyles = createUseStyles({
  header: {
    marginTop: 20,
  },
});

export const Header: React.FC = () => {
  const styles = useStyles();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className="row">
          <Navbar/>
        </div>
      </div>
    </header>
  );
}
