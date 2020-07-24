import { errorDescriptor } from "./error-descriptor";

describe("error descriptor", () => {
  it("should set fetch error", () => {
    const error = errorDescriptor("Failed to fetch");

    expect(error).toBe("Ошибка сервера");
  });

  it("should set error by incorrect login or password", () => {
    const error = errorDescriptor("User does not exist!");

    expect(error).toBe("Неправильный логин и/или пароль");
  });

  it("should set error by existing user", () => {
    const error = errorDescriptor("User exists already!");

    expect(error).toBe("Такой пользователь уже существует");
  });
});
