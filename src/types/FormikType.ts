interface Status {
  loading: boolean;
  error: string;
}

export interface FormikType<T> {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<any>) => void;
  values: T;
  status: Status;
  errors: T;
}
