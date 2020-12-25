export interface UserInstance {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  avatar: string;
}

export interface ErrorInstance {
  name: string;
  msg: string;
  path: string;
  time: Date;
}
