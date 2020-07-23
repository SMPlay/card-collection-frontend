export const checkErrorRegLogin = (error: string): boolean => {
  if (error === 'Такой пользователь уже существует') {
    return true;
  }

  return false;
}
