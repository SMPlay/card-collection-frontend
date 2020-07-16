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

import { Navbar } from "../Navbar/Navbar";
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
  open: boolean;
  pages: PageType[];
}

export const DrawerHeader: React.FC<DrawerHeaderProps> = ({ handleDrawerClose, open, drawerWidth, pages }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Drawer
        className={classes.drawer}
        style={{ width: drawerWidth }}
        variant="persistent"
        anchor="left"
        open={open}
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
          <Navbar pages={pages}/>
        <Divider />
      </Drawer>
  );
}
