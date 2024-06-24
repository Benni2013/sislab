// middleware/verifyToken.js
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../models/user');

dotenv.config();

const verifyToken = async (req, res, next) => {
  const token = req.cookies.token || ''; // Assuming the token is stored in a cookie

  if (!token) {
    return res.status(403).json({ message: 'Access denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;

    const user = await User.findByPk(req.user.id_user);
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user = {
      id_user: user.id_user,
      name: user.name,
      // Add other user properties as needed
    };

    next();
  } catch (err) {
    console.error('Error decoding token:', err);
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = verifyToken;
