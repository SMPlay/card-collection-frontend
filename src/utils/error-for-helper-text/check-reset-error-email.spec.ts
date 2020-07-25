import { checkResetErrorEmail } from "./check-reset-error-email";

describe("checkErrorEmail", () => {
  it("should return false", () => {
    const result = checkResetErrorEmail('Пользователь');

    expect(result).toBeFalsy();
  });

  it("should return true", () => {
    const result = checkResetErrorEmail('Пользователя с таким email не существует');

    expect(result).toBeTruthy();
  })
});
