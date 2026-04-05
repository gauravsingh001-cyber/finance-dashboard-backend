import { registerUser, loginUser } from '../services/auth.service.js';
import generateToken from '../utils/generateToken.js';

export const register = async (req, res) => {
  try {
    const user = await registerUser(req.body);

    res.status(201).json({
      _id: user._id,
      email: user.email,
      role: user.role,
      token: generateToken(user._id)
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const user = await loginUser(req.body.email, req.body.password);

    res.json({
      _id: user._id,
      email: user.email,
      role: user.role,
      token: generateToken(user._id)
    });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};