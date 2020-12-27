import User from '../user/userModel';
import { UserUpdateAttribute } from './userTypes';
import * as AuthService from '../auth/authService';

export const updateUser = async (id: string, form: UserUpdateAttribute) => {
  try {
    if (form.password) {
      form.password = await AuthService.hashPassword(form.password);
    }
    const [rows, result] = await User.update(
      {
        firstName: form.firstName,
        lastName: form.lastName,
        password: form.password,
        gender: form.gender,
        avatar: form.avatar,
      },
      {
        where: { id: id },
        returning: true,
      },
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};
