const { UserModel } = require('../models/userModel.js');

const getUser = async (req, res) => {
  try {
    const user = await UserModel.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

module.exports = { getUser};