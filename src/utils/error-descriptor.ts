export const errorDescriptor = (error: string) => {
  switch (error) {
    case "Failed to fetch":
      return "Ошибка сервера";
    case "User does not exist!":
    case "Password is incorrect!":
      return "Неправильный логин и/или пароль";
    case "User exists already!":
      return "Такой пользователь уже существует";
  }
}
