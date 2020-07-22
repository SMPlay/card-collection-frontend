type ValidateError = boolean | string | undefined;

export const setError = (status: string, validateError: ValidateError, serverError: string) => {
  if (status === "error") {
    return serverError;
  }

  return validateError;
}
