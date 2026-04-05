import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export const registerUser = async (data) => {
  const { name, email, password, role } = data;

  const exists = await User.findOne({ email });
  if (exists) throw new Error('User already exists');

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashed,
    role
  });

  return user;
};

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) throw new Error('Invalid credentials');

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error('Invalid credentials');

  return user;
};