import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@material-ui/core";
import { useMutation } from "@apollo/client";

import { CONFIRM_USER } from "../queries";
import { Loading } from "../components";
import { errorDescriptor } from "../utils";

export const ConfirmSuccessPage = () => {
  const [confirm, { loading, error }] = useMutation(CONFIRM_USER);
  const { token } = useParams();

  useEffect(() => {
    confirm({ variables: { token } });
  }, []);

  return (
    <main>
      <Container>
        {loading ? (
          <Loading />
        ) : error ? (
          <Typography variant="h2" component="h1">
            {errorDescriptor(error.message)}
          </Typography>
        ) : (
          <Typography variant="h2" component="h1">
            Ваш аккаунт подтвержден. Вы можете войти в него. перейдя на страницу
            входа
          </Typography>
        )}
      </Container>
    </main>
  );
};
