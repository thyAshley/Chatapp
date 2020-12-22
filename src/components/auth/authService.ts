import User from '../user/userModel';

export const findUser = async (email: string) => {
  return await User.findOne({ where: { email: email } });
};
