// employeeRoutes.js

import express from 'express';
import {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeeById
} from '../controllers/employeeController.js';

const router = express.Router();

// CRUD routes
router.get('/get', getEmployees);
router.post('/create', createEmployee);
router.put('/update/:id', updateEmployee);
router.delete('/delete/:id', deleteEmployee);
router.get('/getone/:id',getEmployeeById);
export default router;
