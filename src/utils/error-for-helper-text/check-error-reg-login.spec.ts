import { checkErrorRegLogin } from "./check-error-reg-login";

describe("checkErrorRegLogin", () => {
  it("should return false", () => {
    const result = checkErrorRegLogin('Пользователь');

    expect(result).toBeFalsy();
  });

  it("should return true", () => {
    const result = checkErrorRegLogin('Такой пользователь уже существует');

    expect(result).toBeTruthy();
  })
});
