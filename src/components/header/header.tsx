import React, { useState } from "react";
import { useLocation } from "react-router-dom"
import clsx from "clsx";
import {
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { useQuery } from "@apollo/client";

import { HeaderContent } from "./header-content/header-content";
import { Navbar } from "./navbar/navbar";
import { GET_COLLECTIONS_NAME } from "../../queries";
import { CollectionNameType } from '../../types/CollectionNameType';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexGrow: 1,
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
  { pageName: "Галерея", url: "/gallery" },
  { pageName: "Аукцион", url: "/auction" }
];

const allPages = [
  { pageName: "Главная", url: "/" },
  { pageName: "Коллекции", url: "/collections" },
  { pageName: "Галерея", url: "/gallery" },
  { pageName: "Аукцион", url: "/auction" },
  { pageName: "Регистрация", url: "/registration" },
  { pageName: "Вход", url: "/login" },
  { pageName: "Восстановление пароля", url:"/reset-password" }
];

interface CollectionsNameData {
  cardCollections: CollectionNameType[] | undefined;
}

export const Header: React.FC = () => {
  const { pathname } = useLocation();
  const currentPageFromUrl = pathname.split("/")[1];
  const currentPage = allPages.find(page => page.url === `/${currentPageFromUrl}`)?.pageName;

  const { data, error } = useQuery<CollectionsNameData>(GET_COLLECTIONS_NAME);

  const classes = useStyles();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
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
              handleDrawerOpen={handleClick}/>
          <Navbar
              pages={pages}
              collectionsNameError={error}
              collectionsName={data?.cardCollections}
              handleDrawerClose={handleClick}
              drawerWidth={drawerWidth}
              isOpen={isOpen}/>
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
};
