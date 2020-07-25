import { checkErrorRegLogin, checkErrorEmail, checkResetErrorEmail } from "./error-for-helper-text";

export const checkErrorByField = (field: string, error: string): boolean => {
  switch(field) {
    case "regLogin":
      return checkErrorRegLogin(error)
    case "regEmail":
      return checkErrorEmail(error);
    case "resetEmail":
      return checkResetErrorEmail(error);
    default:
      return false;
  }
}
