import React, { useState } from "react";
import { Container, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/client";

import { ResetPasswordEmail } from "../components";
import { RESET_PASSWORD_QUERY } from "../queries";
import { errorDescriptor } from "../utils";

export const ResetPassword = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [resetPasswordQuery] = useMutation(RESET_PASSWORD_QUERY);
  const { handleSubmit, handleChange, values, errors, status } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .strict(true)
        .required("Это обязательное поле")
        .trim("В этом поле не должно быть пробелов!")
        .email("Неверный email"),
    }),
    onSubmit: async ({ email }, FormikBag) => {
      try {
        FormikBag.setStatus({
          loading: true,
          error: "",
        });
        await resetPasswordQuery({ variables: { email } });

        setSuccess(true);
      } catch (e) {
        FormikBag.setStatus({
          loading: false,
          error: errorDescriptor(e.message),
        });
      }
    },
  });

  return (
    <main>
      <Container>
        {!success ? (
          <ResetPasswordEmail
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            values={values}
            errors={errors}
            status={status}
          />
        ) : (
          <Typography variant="h2" component="h2">
            Перейдите по ссылке, которая будет на вашей почте для смены пароля
          </Typography>
        )}
      </Container>
    </main>
  );
};
