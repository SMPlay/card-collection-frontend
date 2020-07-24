import { checkErrorRegLogin, checkErrorEmail } from "./error-for-helper-text";

export const checkErrorByField = (field: string, error: string): boolean => {
  switch(field) {
    case "regLogin":
      return checkErrorRegLogin(error)
    case "regEmail":
      return checkErrorEmail(error);
    default:
      return false;
  }
}
