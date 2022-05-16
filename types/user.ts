export type User = {
  id: Number;
  name: {
    firstName: String;
    lastName: String;
  };
  email: String;
  gender: String;
  role: String;
};

export type UserResponse = {
  total: number;
  page: number;
  count: number;
  numPages: number;
  entries: User[];
};
