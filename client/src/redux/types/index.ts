export type UserInstance = {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  avatar?: string;
  password?: string;
} | null;

export interface ErrorInstance {
  name: string;
  msg: string;
  path: string;
  time: Date;
}
