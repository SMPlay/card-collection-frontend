import React, { useState } from "react";
import { useLocation } from "react-router-dom"
import clsx from "clsx";
import {
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import { HeaderContent } from "./Header-content/header-content";
import { Navbar } from "./navbar/navbar";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
  })
);

const pages = [
  { pageName: "Главная", url: "/" },
  { pageName: "Коллекции", url: "/collections" },
  { pageName: "Галерея", url: "/gallery" },
  { pageName: "Аукцион", url: "/auction" }
];

export const Header: React.FC = () => {
  const { pathname } = useLocation();
  const currentPageFromUrl = pathname.split("/")[1];
  const currentPage = pages.find(page => page.url === `/${currentPageFromUrl}`)?.pageName;

  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: isOpen,
        })}
      >
          <HeaderContent
              isOpen={isOpen}
              currentPage={currentPage!}
              handleDrawerOpen={handleDrawerOpen}/>
          <Navbar
              pages={pages}
              handleDrawerClose={handleDrawerClose}
              drawerWidth={drawerWidth}
              isOpen={isOpen}/>
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
};
