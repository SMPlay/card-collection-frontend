import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { useMutation } from "@apollo/client";
import * as yup from "yup";

import { NewPasswordForm } from "../components";
import { SET_NEW_PASSWORD } from "../queries";
import { Container } from "@material-ui/core";
import { errorDescriptor } from "../utils";

export const NewPasswordPage: React.FC = () => {
  const [setNewPassword] = useMutation(SET_NEW_PASSWORD);
  const { token } = useParams();
  const history = useHistory();
  const { handleSubmit, handleChange, values, errors, status } = useFormik({
    initialValues: {
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: yup.object({
      newPassword: yup
        .string()
        .strict(true)
        .required("Это обязательное поле!")
        .trim("Поле не должно содержать пробелы!")
        .min(8, "Минимум 8 символов")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[@$!%*#?&])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
          "Минимум одна буква, одно число и один из символов: '@$!%*#?&'"
        ),
      confirmNewPassword: yup.string().when("newPassword", {
        is: (value) => (value && value.length >= 8 ? true : false),
        then: yup
          .string()
          .oneOf([yup.ref("newPassword")], "Пароли не совпадают!"),
      }),
    }),
    onSubmit: async ({ newPassword }, FormikBag) => {
      try {
        FormikBag.setStatus({
          loading: true,
          error: "",
        });
        await setNewPassword({ variables: { newPassword, token } });

        history.push("/login");
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
        <NewPasswordForm
          values={values}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          status={status}
          errors={errors}
        />
      </Container>
    </main>
  );
};
