export const checkResetErrorEmail = (error: string): boolean => {
  if (error === 'Пользователя с таким email не существует') {
    return true;
  }

  return false;
}
