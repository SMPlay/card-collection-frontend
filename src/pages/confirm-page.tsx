import React from "react";
import { Container, Typography } from "@material-ui/core";

export const ConfirmPage = () => {
  return (
    <main>
      <Container>
        <Typography variant="h2" component="h1">
          Перейдите по ссылке, которая пришла к вам на почту,
          чтобы активировать аккаунт
        </Typography>
      </Container>
    </main>
  );
}
