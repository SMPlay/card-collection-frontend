import React from "react";
import { AppBar } from "@material-ui/core";
import { HeaderToolbar } from "../Header-toolbar/Header-toolbar";
import clsx from "clsx";
import {
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
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

interface AppBarHeaderProps {
  open: boolean;
  currentPage: string;
  handleDrawerOpen: () => void; 
}

export const AppBarHeader: React.FC<AppBarHeaderProps> = ({ open, currentPage, handleDrawerOpen }) => {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <HeaderToolbar
        open={open}
        currentPage={currentPage}
        handleDrawerOpen={handleDrawerOpen}
      />
    </AppBar>
  );
};
