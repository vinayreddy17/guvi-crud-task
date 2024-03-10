// employeeController.js

import Employee from '../models/employeeModel.js';

// Get all employees
export const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new employee
export const createEmployee = async (req, res) => {
   
  const employee = req.body;
  
  try {
    const newEmployee = await Employee.create(employee);
    res.status(201).json({message:'employee created'});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing employee
export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const updateid=id;
  const employee = req.body;
  console.log(id,employee);
  try {
    const foundemployee=await Employee.findOne({ id });
    console.log(foundemployee);
    const updatedEmployee = await Employee.findOneAndUpdate({ id: updateid }, employee, { new: true });

    res.status(200).json({message:'employee updated succesfully'});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an employee
export const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    await Employee.findByIdAndDelete(id);
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single employee by ID
export const getEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findOne({ id });
    
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
