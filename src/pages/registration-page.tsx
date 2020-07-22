import React from "react";
import { Container } from "@material-ui/core";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

import { RegistrationForm } from "../components";
import { REGISTRATION_QUERY } from "../queries";

export const RegistrationPage: React.FC = () => {
  const [registration] = useMutation(REGISTRATION_QUERY);
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
      confirmPassword: "",
    },
    validationSchema: yup.object({
      login: yup
        .string()
        .strict(true)
        .required("Это обязательное поле!")
        .trim("Поле не должно содержать пробелы!")
        .min(3, "Минимум 3 символов")
        .max(30, "Максимум 30 символов")
        .matches(
          /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/,
          "Недопустимые символы в начале или конце"
        ),
      password: yup
        .string()
        .strict(true)
        .required("Это обязательное поле!")
        .trim("Поле не должно содержать пробелы!")
        .min(8, "Минимум 8 символов")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[@$!%*#?&])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
          "Минимум одна буква, одно число и один из символов: '@$!%*#?&'"
        ),
      confirmPassword: yup.string().when("password", {
        is: (value) => (value && value.length > 0 ? true : false),
        then: yup.string().oneOf([yup.ref("password")], "Пароли не совпадают!"),
      }),
    }),
    onSubmit: async ({ login, password }, FormikBag) => {
      try {
        FormikBag.setStatus("loading");
        await registration({ variables: { login, password } });

        history.push("/login");
      } catch (e) {
        FormikBag.setStatus("error");
      }
    },
  });

  return (
    <main>
      <Container>
        <RegistrationForm
          values={values}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleBlur={handleBlur}
          status={status}
          errors={errors}
          touched={touched}
        />
      </Container>
    </main>
  );
};
