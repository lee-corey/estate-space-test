import { UserResponse } from "../types/user";

const endpoint = "https://my.api.mockaroo.com/users.json";
const key = "930279b0";

const getUsers = (page: number, count: number) => {
  return new Promise<UserResponse>((resolve, reject) => {
    const url = `${endpoint}?page=${page}&count=${count}&key=${key}`;
    return fetch(url)
      .then((response) => response.json())
      .then((users: UserResponse) => resolve(users))
      .catch((err) => reject(err));
  });
};

export default getUsers;
