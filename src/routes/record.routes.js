import express from 'express';
import {
  addRecord,
  fetchRecords,
  editRecord,
  removeRecord
} from '../controllers/record.controller.js';

import { protect, authorize } from '../middleware/auth.middleware.js';

const router = express.Router();

router.use(protect);

router.get('/', fetchRecords);
router.post('/', authorize('admin'), addRecord);
router.put('/:id', authorize('admin'), editRecord);
router.delete('/:id', authorize('admin'), removeRecord);

export default router;