// authController.js

import User from '../models/User.js'; // Import the User model

export const login = async (req, res) => {
    const { f_userName, f_Pwd } = req.body;
    
    try {
      
      const user = await User.findOne({ f_userName, f_Pwd });
      
      if (user) {
        res.json({ success: true, message: 'Login successful', username: user.f_userName });
      } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
};
