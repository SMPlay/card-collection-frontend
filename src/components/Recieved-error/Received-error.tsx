import React from "react";
import { Typography } from "@material-ui/core";

export const ReceivedError: React.FC = () => {
  return (
    <Typography variant="h3" component="h2">
      Простите, произошла проблема с сервером :(
    </Typography>
  );
};
