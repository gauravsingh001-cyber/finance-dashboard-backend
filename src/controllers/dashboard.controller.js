import { getSummary } from '../services/dashboard.service.js';

export const summary = async (req, res) => {
  const data = await getSummary(req.user._id);
  res.json(data);
};