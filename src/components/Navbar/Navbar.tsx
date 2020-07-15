import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { PageType } from "../../types/PageType";

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    navlink: { color: "rgb(79, 79, 79)" }
  })
);

interface NavbarProps {
  pages: PageType[];
}

export const Navbar: React.FC<NavbarProps> = ({ pages }) => {
  const classes = useStyles();

  return (
    <List>
      {pages.map((page) => (
        <Link
          to={page.url}
          key={page.pageName}>
          <ListItem button>
            <ListItemText classes={{primary: classes.navlink}} primary={page.pageName} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
};
