import React from "react";
import { Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import {
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

interface HeaderToolbarProps {
  handleDrawerOpen: () => void;
  currentPage: string;
  open: boolean;
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hide: {
      display: "none",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  })
);

export const HeaderToolbar: React.FC<HeaderToolbarProps> = ({ handleDrawerOpen, currentPage, open }) => {
  const classes = useStyles();

  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, open && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap>
        {currentPage}
      </Typography>
    </Toolbar>
  );
};
