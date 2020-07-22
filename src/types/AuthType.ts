export interface AuthType<T> {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: any) => void;
  values: T;
  status: string;
  errors: T;
  touched: T;
}
