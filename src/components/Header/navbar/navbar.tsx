import React from "react";
import { Drawer, IconButton, Divider } from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

import { NavbarList } from "./navbar-list/navbar-list";
import { PageType } from '../../../types/PageType';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      flexShrink: 0,
    },
    drawerPaper: {
      width: 240,
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

interface DrawerHeaderProps {
  handleDrawerClose: () => void;
  drawerWidth: number;
  isOpen: boolean;
  pages: PageType[];
}

export const Navbar: React.FC<DrawerHeaderProps> = ({ handleDrawerClose, isOpen, drawerWidth, pages }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Drawer
        className={classes.drawer}
        style={{ width: drawerWidth }}
        variant="persistent"
        anchor="left"
        open={isOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
          <NavbarList pages={pages}/>
        <Divider />
      </Drawer>
  );
}
