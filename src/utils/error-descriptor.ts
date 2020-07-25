export const errorDescriptor = (error: string): string => {
  switch (error) {
    case "Failed to fetch":
      return "Ошибка сервера";
    case "User does not exist!":
    case "Password is incorrect!":
      return "Неправильный логин и/или пароль";
    case "User exists already!":
      return "Такой пользователь уже существует";
    case "User with this email already exists":
      return "Пользователь с такие email уже существует";
    case "Can`t find user with this email!":
      return "Пользователя с таким email не существует";
    case "This token does not exist!":
      return "Этот токен недействителен!";
    default:
      return ""
  }
}
