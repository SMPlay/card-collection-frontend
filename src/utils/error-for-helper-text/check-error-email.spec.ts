import { checkErrorEmail } from "./check-error-email";

describe("checkErrorEmail", () => {
  it("should return false", () => {
    const result = checkErrorEmail('Пользователь');

    expect(result).toBeFalsy();
  });

  it("should return true", () => {
    const result = checkErrorEmail('Пользователь с такие email уже существует');

    expect(result).toBeTruthy();
  })
});
