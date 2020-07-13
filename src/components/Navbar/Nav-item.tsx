import React from "react";
import { createUseStyles, useTheme } from "react-jss";

import arrowImg from "../../img/arrow.png";

const useStyles = createUseStyles({
  navItem: {
    position: "relative",
    fontSize: 22,
    fontWeight: 600,
    width: 150,
    height: 27,
    padding: "0 10px",
    color: "rgb(255, 255, 255)",
    background: ({theme}) => theme.colorPrimary,
    transform: "skew(-20deg)",
    cursor: "pointer",
    border: "1px solid rgb(18, 18, 18)",
    "&::after": {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      content: "''",
      width: "100%",
      height: "100%",
      opacity: 0,
      background: "linear-gradient(to top, rgba(255, 255, 255, .5), transparent)",
      transition: "opacity .2s ease",
    },
    "&:hover": {
      "&::after": { opacity: .6 }
    }
  },
  navItemChild: {
    position: "relative",
    zIndex: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: "skew(20deg)",
  },
  arrow: {
    position: "absolute",
    top: 5,
    right: -7,
    transform: "rotate(-90deg)",
    transition: "transform .2s ease",
    "&.open": {
      transform: "rotate(0)"
    }
  },
});

interface NavItemProps {
  isManyThings?: boolean;
  isOpen?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ children, isManyThings, isOpen }) => {
  const theme = useTheme();
  const styles = useStyles({theme});

  return (
    <div className={styles.navItem}>
      <span className={styles.navItemChild}>
        {children}
        {isManyThings && 
        <img 
          src={arrowImg} 
          alt="right arrow" 
          className={`${styles.arrow} ${isOpen ? "open" : ""}`}/>}
      </span>
    </div>
  );
}
