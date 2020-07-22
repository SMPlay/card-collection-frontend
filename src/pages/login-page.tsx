import React from "react";
import { Container } from "@material-ui/core";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

import { client } from "../store";
import { LoginForm } from "../components";
import { LOGIN, IS_AUTH } from "../queries";

export const LoginPage: React.FC = () => {
  const [loginQuery] = useMutation(LOGIN);
  const history = useHistory();
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    status,
  } = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: yup.object({
      login: yup
        .string()
        .strict(true)
        .required("Это обязательное поле!")
        .trim("Поле не должно содержать пробелы!")
        .matches(
          /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/,
          "Недопустимые символы в начале или конце"
        ),
      password: yup
        .string()
        .strict(true)
        .required("Это обязательное поле!")
        .trim("Поле не должно содержать пробелы!"),
    }),
    onSubmit: async ({ login, password }, FormikBag) => {
      try {
        FormikBag.setStatus("loading");
        await loginQuery({ variables: { login, password } });

        client.writeQuery({
          query: IS_AUTH,
          data: {
            isAuth: true,
          },
        });

        history.push("/");
      } catch (e) {
        FormikBag.setStatus("error");
      }
    },
  });

  return (
    <main>
      <Container>
        <LoginForm
          values={values}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleBlur={handleBlur}
          status={status}
          errors={errors}
          touched={touched}/>
      </Container>
    </main>
  );
}
