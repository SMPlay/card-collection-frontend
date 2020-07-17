import React from "react";
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import clsx from "clsx";
import {
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

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
     hide: {
          display: "none",
      },
      menuButton: {
          marginRight: theme.spacing(2),
      },
  })
);

interface HeaderContentProps {
  isOpen: boolean;
  currentPage: string;
  handleDrawerOpen: () => void;
}

export const HeaderContent: React.FC<HeaderContentProps> = ({ isOpen, currentPage, handleDrawerOpen }) => {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isOpen,
      })}
    >
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, isOpen && classes.hide)}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
                {currentPage}
            </Typography>
        </Toolbar>
    </AppBar>
  );
};
