export const checkErrorEmail = (error: string): boolean => {
  if (error === 'Пользователь с такие email уже существует') {
    return true;
  }

  return false;
}
