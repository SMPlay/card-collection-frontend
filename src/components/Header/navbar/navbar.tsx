import React from "react";
import { ApolloError } from "@apollo/client";
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
import { CollectionNameType } from "../../../types/CollectionNameType";

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
  collectionsName: CollectionNameType[] | undefined;
  collectionsNameError: boolean | ApolloError | undefined;
}

export const Navbar: React.FC<DrawerHeaderProps> = ({ collectionsNameError, handleDrawerClose, isOpen, drawerWidth, pages, collectionsName }) => {
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
          <NavbarList collectionsNameError={collectionsNameError} collectionsName={collectionsName} pages={pages}/>
        <Divider />
      </Drawer>
  );
}
