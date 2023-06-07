const  User  = require('../models/userModel.js');

const getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { getUser};