import React from "react";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles({
  headerItem: {
    position: "relative",
    fontSize: 22,
    fontWeight: 600,
    maxWidth: 130,
    height: 27,
    padding: "0 10px",
    color: ({theme}) => theme.colorPrimary,
    background: "rgb(16, 118, 227)",
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
      "&::after": {
        opacity: .6
      }
    }
  },
  headerItemChild: {
    position: "relative",
    zIndex: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: "skew(20deg)",
  }
});

export const HeaderItem: React.FC = ({ children }) => {
  const theme = useTheme();
  const styles = useStyles({theme});

  return (
    <div className={styles.headerItem}>
      <span className={styles.headerItemChild}>{children}</span>
    </div>
  );
}
