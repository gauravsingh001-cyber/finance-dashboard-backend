import Record from '../models/record.model.js';

export const createRecord = async (data, userId) => {
  return await Record.create({ ...data, user: userId });
};

export const getRecords = async (query, userId) => {
  const filter = { user: userId };

  if (query.type) filter.type = query.type;
  if (query.category) filter.category = query.category;

  return await Record.find(filter).sort({ date: -1 });
};

export const updateRecord = async (id, data) => {
  return await Record.findByIdAndUpdate(id, data, { new: true });
};

export const deleteRecord = async (id) => {
  return await Record.findByIdAndDelete(id);
};