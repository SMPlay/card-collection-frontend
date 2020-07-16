import React, { useState } from "react";
import { useLocation } from "react-router-dom"
import clsx from "clsx";
import {
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import { AppBarHeader } from "./AppBar-header/AppBar-header";
import { DrawerHeader } from "./Drawer-header/Drawer-header";

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
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBarHeader
         open={open}
         currentPage={currentPage!}
         handleDrawerOpen={handleDrawerOpen}/>
      <DrawerHeader
        pages={pages}
        handleDrawerClose={handleDrawerClose}
        drawerWidth={drawerWidth}
        open={open}/>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
};
