// employeeModel.js

import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true, default: () => Math.floor(1000 + Math.random() * 9000).toString() },
  image: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  designation: { type: String, required: true },
  gender: { type: String, required: true },
  course: { type: String, required: true },
  Createdate: { type: Date, default: Date.now }
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
