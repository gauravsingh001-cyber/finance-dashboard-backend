import {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord
} from '../services/record.service.js';

export const addRecord = async (req, res) => {
  try {
    const record = await createRecord(req.body, req.user._id);
    res.status(201).json(record);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const fetchRecords = async (req, res) => {
  const data = await getRecords(req.query, req.user._id);
  res.json(data);
};

export const editRecord = async (req, res) => {
  const updated = await updateRecord(req.params.id, req.body);
  res.json(updated);
};

export const removeRecord = async (req, res) => {
  await deleteRecord(req.params.id);
  res.json({ message: 'Deleted' });
};