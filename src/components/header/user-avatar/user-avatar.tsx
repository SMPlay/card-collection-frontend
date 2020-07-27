import React, { FC } from "react";
import { Avatar, Button, Popover } from "@material-ui/core";
import { useLazyQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";

import { LOGOUT } from "../../../queries/logout";
import { client } from "../../../store";
import { IS_AUTH } from "../../../queries";

export const UserAvatar: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState();
  const history = useHistory();
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const [ logout ] = useLazyQuery(LOGOUT, {
    onCompleted: () => {

  }
  });
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = () => {
    logout();
    client.writeQuery({
      query: IS_AUTH,
      data: {
        isAuth: false
      }
    });
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <div>
        <Avatar onClick={handleClick} aria-describedby={id}/>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Button onClick={onLogout} >Logout</Button>
        </Popover>
      </div>
    </>
  )
}