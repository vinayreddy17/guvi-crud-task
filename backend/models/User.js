

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    f_sno: { type: Number, required: true, unique: true },
    f_userName: { type: String, required: true, unique: true },
    f_Pwd: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

export default User;
