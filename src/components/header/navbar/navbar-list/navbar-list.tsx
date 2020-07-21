import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Collapse } from "@material-ui/core";
import { ApolloError } from "@apollo/client";

import { PageType } from "../../../../types/PageType";
import { CollectionNameType } from "../../../../types/CollectionNameType";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navlink: { color: "rgb(79, 79, 79)" },
    nested: { paddingLeft: theme.spacing(4) },
  })
);

export interface NavbarListProps {
  pages: PageType[];
  collectionsName: CollectionNameType[] | undefined;
  collectionsNameError: boolean | ApolloError | undefined;
}

export const NavbarList: React.FC<NavbarListProps> = ({
  pages,
  collectionsName,
  collectionsNameError
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const classes = useStyles();

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <List>
      {pages.map((page) => (
        <Link to={page.url} key={page.pageName}>
          <ListItem button>
            <ListItemText
              classes={{ primary: classes.navlink }}
              primary={page.pageName}
            />
          </ListItem>
        </Link>
      ))}
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Коллекции" />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {collectionsNameError ? (
            <ListItem button className={classes.nested}>
              <ListItemText primary="Проблемы с сервером" data-test-error="error-message"/>
            </ListItem>
          ) : (
            collectionsName?.map((collection) => (
              <Link to={`collections/${collection.id}`} key={collection.id}>
                <ListItem button className={classes.nested}>
                  <ListItemText classes={{ primary: classes.navlink }} primary={collection.name} />
                </ListItem>
              </Link>
            ))
          )}
        </List>
      </Collapse>
    </List>
  );
};
