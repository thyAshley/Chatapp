import User from '../user/userModel';
import { UserUpdateAttribute } from './userTypes';
import * as AuthService from '../auth/authService';

export const updateUser = async (
  id: string,
  form: UserUpdateAttribute,
  avatar: Express.Multer.File,
) => {
  try {
    if (form.password) {
      form.password = await AuthService.hashPassword(form.password);
    }
    const [_, result] = await User.update(
      {
        firstName: form.firstName,
        lastName: form.lastName,
        password: form.password,
        gender: form.gender,
        avatar: avatar?.filename || undefined,
      },
      {
        where: { id: id },
        returning: true,
      },
    );
    return result[0];
  } catch (error) {
    console.log(error);
  }
};
